const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

dotenv.config({ path: '.env' });

const app = express();
app.use(cors());
app.use(express.json());

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

// Placeholder route
app.get('/admin', (req, res) => {
  res.json({ message: 'Admin route accessed', user: req.user });
});

const port = 5010;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});