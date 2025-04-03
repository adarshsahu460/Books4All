// for ngo routes
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const ngoRouter = require("./routes/ngoRouter");

const authController = require("./controller/authController");

const app = express();
app.use(express.json());

const port = 5000;
app.use("/ngo", ngoRouter);

const server = app.listen(port, () => {
  console.log("Server listening at port 3000...");
});


