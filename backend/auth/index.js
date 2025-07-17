const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dotenv.config({ path: '.env' });

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = '7d';

function generateAccessToken(user) {
  return jwt.sign(
    { email: user.email, type: user.type, name: user.name, id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    { email: user.email, type: user.type, id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
}

// Signup route
app.post('/signup', async (req, res) => {
  const { name, address, password, email, phone, type, latitude, longitude } = req.body;
  if (!name || !address || !password || !email || !phone || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const existing = await prisma.userInfo.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: 'User already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.userInfo.create({
      data: { name, address, password: hashed, email, phone, type, latitude, longitude }
    });
    res.status(201).json({ message: 'User created', user: { email: user.email, type: user.type } });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing credentials' });
  try {
    const user = await prisma.userInfo.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.json({ message: 'Login successful', user: { email: user.email, type: user.type } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/refresh', (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(401).json({ error: 'No refresh token' });
  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const accessToken = jwt.sign(
      { email: payload.email, type: payload.type, id: payload.id },
      process.env.JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000
    });
    res.json({ message: 'Token refreshed' });
  } catch (err) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
});

function rbac(allowedRoles) {
  return (req, res, next) => {
    // Public endpoints
    if (
      req.path.startsWith('/signup') ||
      req.path.startsWith('/login') ||
      req.path.startsWith('/refresh') ||
      req.path.startsWith('/logout')
    ) {
      return next();
    }
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ error: 'No access token' });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!allowedRoles.includes(decoded.type)) {
        return res.status(403).json({ error: 'Forbidden: insufficient role' });
      }
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid or expired access token' });
    }
  };
}

// Proxy routes to internal services with RBAC
app.use('/ngo', rbac(['ngo']), createProxyMiddleware({ target: 'http://ngo:5002', changeOrigin: true }));
app.use('/donor', rbac(['donor']), createProxyMiddleware({ target: 'http://donor-backend:5003', changeOrigin: true }));
app.use('/api', rbac(['client']), createProxyMiddleware({ target: 'http://client-backend:5001', changeOrigin: true }));
app.use('/transactions', rbac(['ngo']), createProxyMiddleware({ target: 'http://batch-process:5004', changeOrigin: true }));
app.use('/send-messages', rbac(['ngo', 'donor', 'client']), createProxyMiddleware({ target: 'http://message-backend:5005', changeOrigin: true }));

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});