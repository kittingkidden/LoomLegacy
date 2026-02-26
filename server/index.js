const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ LoomLegacy Database Connected!"))
  .catch((err) => console.log("❌ DB Connection Error: ", err));

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('LoomLegacy API is running...');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ LoomLegacy Database Connected!"))
  .catch((err) => console.log("❌ DB Connection Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));