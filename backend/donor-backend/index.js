const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Route to handle donor book creation
app.post("/donor-book", async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, category, book_name, img_link } = req.body;

    console.log(req.body);

    if (!D_id || !ISBN || !qty || !age || !category || !book_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const donorBook = await prisma.donorBook.create({
      data: {
        D_id: parseInt(D_id), // Ensure D_id is an integer
        ISBN: ISBN,
        qty: parseInt(qty),
        age: parseInt(age),
        category: category,
        book_name: book_name,
        img_link: img_link || null,
      },
    });

    res.status(201).json({ message: "Book added successfully", donorBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Route to handle OCR + Book Entry with image upload (base64 file in body)
app.post("/donor-ocr", async (req, res) => {
  try {
    const { D_id, ISBN, qty, age, category, book_name, img_link } = req.body;

    if (!D_id || !ISBN || !qty || !age || !category || !book_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Decode the base64 string to save as an image
    if (img_link) {
      const base64Data = img_link.split(",")[1]; // Remove the "data:image/*;base64," part
      const filePath = path.join(
        __dirname,
        "uploads",
        Date.now() + "-book-image.jpg"
      ); // Generate a file path for the image

      // Write the image data to the disk
      fs.writeFileSync(filePath, base64Data, "base64");

      // Save the file path in the database
      img_link = filePath; // Store the file path or URL in the database
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
        img_link: img_link || null, // Optional field for image link
      },
    });

    res
      .status(201)
      .json({ message: "Book added successfully via OCR", donorBook });
  } catch (error) {
    console.error("Error processing OCR request:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Token signing function
const signToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// User signup route
app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await prisma.userInfo.create({
    data: {
      name: req.body.name,
      address: req.body.address,
      password: hashedPassword,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type,
    },
  });

  const token = signToken(newUser.email);
  res.status(201).json({
    status: "success",
    token,
    user: {
      id: newUser.id,
    },
  });
});

// User login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Missing email or password",
    });
  }

  const user1 = await prisma.userInfo.findUnique({
    where: { email: email },
    select: { password: true, id: true },
  });

  if (!user1 || !(await bcrypt.compare(password, user1.password))) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }

  const token = signToken(email);

  res.status(200).json({
    status: "success",
    token,
    user: {
      id: user1.id,
    },
  });
});

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
