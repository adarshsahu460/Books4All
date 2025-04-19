const express = require('express');
const Keycloak = require('keycloak-connect');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: '.env' });

// Validate environment variables
const requiredEnvVars = ['KEYCLOAK_REALM', 'KEYCLOAK_URL', 'KEYCLOAK_CLIENT', 'KEYCLOAK_CLIENT_SECRET'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing environment variable: ${varName}`);
    process.exit(1);
  }
});

if (!process.env.KEYCLOAK_URL.startsWith('http')) {
  console.error(`Invalid KEYCLOAK_URL: ${process.env.KEYCLOAK_URL}. Must start with http or https.`);
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Keycloak configuration
const keycloak = new Keycloak({}, {
  realm: process.env.KEYCLOAK_REALM,
  'auth-server-url': process.env.KEYCLOAK_URL,
  'ssl-required': 'external',
  resource: process.env.KEYCLOAK_CLIENT,
  credentials: { secret: process.env.KEYCLOAK_CLIENT_SECRET },
});

// Apply Keycloak middleware
app.use(keycloak.middleware());

// Route for server1 (login/signup, port 5000)
app.all('/auth/*', keycloak.protect(), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server1:5000${req.path.replace('/auth', '')}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Route for server2 (ngo routes, port 5002)
app.all('/ngo/*', keycloak.protect('realm:ngo-read'), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server2:5002${req.path}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Route for server3 (book requests, port 5001)
app.all('/api/*', keycloak.protect('realm:client-read'), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server3:5001${req.path}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Route for server4 (donor books, port 5003)
app.all('/donor/*', keycloak.protect('realm:donor-write'), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server4:5003${req.path}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Route for server5 (transactions, port 5004)
app.all('/transactions/*', keycloak.protect('realm:admin-read'), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server5:5004${req.path}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Route for server6 (messaging, port 5005)
app.all('/send-messages/*', keycloak.protect('realm:admin-write'), async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://server6:5005${req.path}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Middleware running on port ${port}`);
});