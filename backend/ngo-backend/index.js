const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ngoRouter = require('./routes/ngoRouter');

dotenv.config({ path: '.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/ngo', ngoRouter);

const port = 5002;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});