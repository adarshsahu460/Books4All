const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");

const authController = require("./controller/authController");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

const port = 5000;

const server = app.listen(port, () => {
  console.log("Server listening at port 5000...");
});

app.use("/login", authController.login);
app.use("/signup", authController.signup);



