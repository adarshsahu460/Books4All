const express = require("express");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");
require('dotenv').config(); 
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/donor/book", upload.single("img"), async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, book_name } = req.body;
    const donor = await prisma.userInfo.findUnique({ where: { id: parseInt(D_id) } });
    if (!donor) {
      return res.status(404).json({ error: "Donor not found" });
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeURIComponent(ISBN)}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    const data = await axios.get(url);
    const category = data.items[0].volumeInfo.categories[0];
    const image_link = data.items[0].volumeInfo.imageLinks.thumbnail;
    const newBook = await prisma.donorBook.create({
      data: {
        D_id: parseInt(D_id),
        ISBN,
        qty: parseInt(qty),
        age: parseInt(age),
        category,
        book_name,
        img_link: image_link,
      },
    });

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
