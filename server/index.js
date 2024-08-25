const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./database/db.js');
const app = express();

app.use(express.json());
dotenv.config();

connectDatabase();

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server is running');
});
