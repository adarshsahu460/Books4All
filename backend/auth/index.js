const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

dotenv.config({ path: '.env' });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JWT validation middleware
const client = jwksClient({
  jwksUri: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/certs`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key?.publicKey || key?.rsaPublicKey;
    callback(null, signingKey);
  });
}

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('No token provided');
  
  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
};

// Apply token validation to all routes
app.use(verifyToken);

// Mock login/signup routes (replace with actual logic if needed)
app.post('/login', (req, res) => {
  res.json({ message: 'Login processed', user: req.user });
});

app.post('/signup', (req, res) => {
  res.json({ message: 'Signup processed', user: req.user });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});