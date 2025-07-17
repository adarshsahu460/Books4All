const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true })); 
const PYTHON_OCR_SERVICE_URL = 'http://localhost:5004'; 

app.post('/donor-book', async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, category, book_name, img_link } = req.body;

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

app.post('/donor-ocr', async (req, res) => {
  try {
    const { D_id, img_link } = req.body; 
    
    if (!D_id || !img_link) {
      return res.status(400).json({ message: 'Missing required fields: D_id and img_link' });
    }

    const [mimeTypePart, base64Data] = img_link.split(',');
    const mimeType = mimeTypePart.split(':')[1].split(';')[0];
    const buffer = Buffer.from(base64Data, 'base64');

    const FormData = require('form-data');
    const form = new FormData();
    form.append('image', buffer, {
      filename: `book-image-${Date.now()}.${mimeType.split('/')[1]}`,
      contentType: mimeType,
    });

    let ocrResult;
    try {
      const pythonResponse = await axios.post(`${PYTHON_OCR_SERVICE_URL}/upload`, form, {
        headers: {
          ...form.getHeaders(),
        },
        maxBodyLength: Infinity, // Allow large requests
        maxContentLength: Infinity, // Allow large responses
      });
      ocrResult = pythonResponse.data;
      console.log('OCR Result from Python:', ocrResult);

      if (!ocrResult.title || !ocrResult.author || !ocrResult.category || !ocrResult.isbn) {
        return res.status(500).json({ message: 'OCR service could not extract all required book details.' });
      }

    } catch (pythonError) {
      console.error('Error calling Python OCR service:', pythonError.response ? pythonError.response.data : pythonError.message);
      return res.status(500).json({ message: 'Failed to process image with OCR service.' });
    }

    let filePath = null;
    try {
      const uploadDir = path.join(__dirname, 'uploads');
      fs.mkdirSync(uploadDir, { recursive: true });
      filePath = path.join(uploadDir, `book-image-${Date.now()}.${mimeType.split('/')[1]}`);
      fs.writeFileSync(filePath, buffer);
      console.log('Image saved locally:', filePath);
    } catch (saveError) {
      console.error('Error saving image locally:', saveError);
    }


    const donorBook = await prisma.donorBook.create({
      data: {
        D_id: parseInt(D_id),
        ISBN: ocrResult.isbn,
        qty: req.body.qty ? parseInt(req.body.qty) : 1, 
        age: req.body.age ? parseInt(req.body.age) : 0, 
        category: ocrResult.category,
        book_name: ocrResult.title,
        img_link: filePath || null, 
      },
    });

    res.status(201).json({ message: 'Book added successfully via OCR', donorBook });
  } catch (error) {
    console.error('Error processing OCR request:', error);
    res.status(500).json({ message: 'An error occurred', error });
  }
});

const port = 5003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
