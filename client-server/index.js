const express = require('express');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const app = express();
// const prisma = new PrismaClient();
app.use(express.json());
require('dotenv').config(); 

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
    res.status(200).json(axiosResponse.data);

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

    res.status(200).json(axiosResponse.data);

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});