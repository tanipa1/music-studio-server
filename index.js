const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middlewear
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Music Studio is running')
})

app.listen(port, () => {
  console.log(`Music Studio is listening on port ${port}`)
})