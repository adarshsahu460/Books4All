const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const ensureUserInDb = require('./middleware/ensureUserInDb');

const prisma = new PrismaClient();
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
app.use(ensureUserInDb);

// Route to handle donor book creation
app.post('/donor-book', async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, category, book_name, img_link } = req.body;

    console.log(req.body);

    if (!D_id || !ISBN || !qty || !age || !category || !book_name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const donorBook = await prisma.donorBook.create({
      data: {
        D_id: parseInt(D_id),
        ISBN: ISBN,
        qty: parseInt(qty),
        age: parseInt(age),
        category: category,
        book_name: book_name,
        img_link: img_link || null,
      },
    });

    res.status(201).json({ message: 'Book added successfully', donorBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error });
  }
});

// Route to handle OCR + Book Entry with image upload (base64 file in body)
app.post('/donor-ocr', async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, category, book_name, img_link } = req.body;

    if (!D_id || !ISBN || !qty || !age || !category || !book_name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Decode the base64 string to save as an image
    let filePath;
    if (img_link) {
      const base64Data = img_link.split(',')[1];
      filePath = path.join(
        __dirname,
        'uploads',
        Date.now() + '-book-image.jpg'
      );

      // Ensure Uploads directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, base64Data, 'base64');
    }

    // Create the donor book record in the database
    const donorBook = await prisma.donorBook.create({
      data: {
        D_id: parseInt(D_id),
        ISBN: ISBN,
        qty: parseInt(qty),
        age: parseInt(age),
        category: category,
        book_name: book_name,
        img_link: filePath || null,
      },
    });

    res
      .status(201)
      .json({ message: 'Book added successfully via OCR', donorBook });
  } catch (error) {
    console.error('Error processing OCR request:', error);
    res.status(500).json({ message: 'An error occurred', error });
  }
});

const port = 5003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});