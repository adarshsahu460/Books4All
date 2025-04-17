// for ngo routes
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const ngoRouter = require("./routes/ngoRouter");

const authController = require("./controller/authController");

const app = express();
app.use(cors())
app.use(express.json());

const port = 5002;
app.use("/ngo", ngoRouter);

const server = app.listen(port, () => {
  console.log("Server listening at port 5002...");
});


