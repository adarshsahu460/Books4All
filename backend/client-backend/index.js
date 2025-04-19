const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const ensureUserInDb = require('./middleware/ensureUserInDb');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());
require('dotenv').config();

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

app.get('/api/request/by-name', async (req, res) => {
  try {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({
        error: 'Missing required parameter: name is required'
      });
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(name)}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    const axiosResponse = await axios.get(url);
    const transformBooks = (booksArray) => {
      return booksArray.map((book, index) => {
        const volumeInfo = book.volumeInfo || {};
        const industryIdentifiers = volumeInfo.industryIdentifiers || [];
    
        return {
          id: index + 1,
          title: volumeInfo.title || "Unknown Title",
          pageCount: volumeInfo.pageCount || "N/A",
          language: volumeInfo.language || "Unknown",
          author: volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author",
          image: volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
          category: volumeInfo.categories ? volumeInfo.categories[0] : "Uncategorized",
          isbn: industryIdentifiers.length > 0 ? industryIdentifiers[0].identifier : "Unknown ISBN",
        };
      });
    };
    const cleanData = transformBooks(axiosResponse.data.items);
    res.status(200).json(cleanData);

  } catch (error) {
    console.error('Error processing book name request:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.get('/api/request/by-isbn', async (req, res) => {
  try {
    const { isbn } = req.query;

    if (!isbn) {
      return res.status(400).json({
        error: 'Missing required parameter: isbn is required'
      });
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeURIComponent(isbn)}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    
    const axiosResponse = await axios.get(url);
    
    if (axiosResponse.data.totalItems === 0) {
      return res.status(404).json({
        error: 'No book found with this ISBN'
      });
    }
    res.status(200).json({
      title: axiosResponse.data.items[0].volumeInfo.title,
      author: axiosResponse.data.items[0].volumeInfo.authors[0],
      publisher: axiosResponse.data.items[0].volumeInfo.publisher,
      description: axiosResponse.data.items[0].volumeInfo.description,
      isbn: isbn,
      pageCount: axiosResponse.data.items[0].volumeInfo.pageCount,
      categories: axiosResponse.data.items[0].volumeInfo.categories,
      language: axiosResponse.data.items[0].volumeInfo.language,
      image: axiosResponse.data.items[0].volumeInfo.imageLinks.thumbnail,
    });

  } catch (error) {
    console.error('Error processing ISBN request:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.get('/api/request/by-category', async (req, res) => {
    try {
        const { category } = req.query;

        if (!category) {
        return res.status(400).json({
            error: 'Missing required parameter: category is required'
        });
        }
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
        
        const axiosResponse = await axios.get(url);
        if (axiosResponse.data.totalItems === 0) {
        return res.status(404).json({
            error: 'No books found in this category'
        });
        }

        res.status(200).json(axiosResponse.data);

    } catch (error) {
        console.error('Error processing category request:', error);
        res.status(500).json({
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

app.post('/api/client/books', async (req, res) => {
    try {
      const { clientId, books } = req.body;
      
      if (!clientId || !books || !Array.isArray(books)) {
        return res.status(400).json({
          error: 'Missing or invalid required fields: clientId and books array are required'
        });
      }

      for (const book of books) {
        if (!book.isbn || !book.qty || isNaN(book.qty)) {
          return res.status(400).json({
            error: 'Each book must have a valid isbn and qty (number)'
          });
        }
      }
  
      const clientBooksData = books.map(book => ({
        C_id: parseInt(clientId),
        ISBN: book.isbn,
        qty: parseInt(book.qty)
      }));
      
      const createdBooks = await prisma.clientBook.createMany({
        data: clientBooksData,
      });
  
      res.status(201).json({
        message: 'Book requests added successfully',
        count: createdBooks.count,
        books: clientBooksData
      });
  
    }catch (error) {
      console.error('Error adding client books:', error);
      res.status(500).json({
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});