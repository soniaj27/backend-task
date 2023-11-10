const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const response = await 
    fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    if (!response.ok) {
      res.send('error')
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});