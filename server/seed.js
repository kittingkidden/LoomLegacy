const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  {
    name: "Handwoven Sambalpuri Silk Saree",
    description: "Authentic Ikat pattern from Odisha, featuring traditional motifs.",
    price: 8500,
    category: "Saree",
    material: "Silk",
    technique: "Ikat",
    isGITagged: true,
    artisanName: "Sahu Weavers",
    region: "Odisha",
    stock: 5
  },
  {
    name: "Pure Khadi Cotton Kurta",
    description: "Breathable, hand-spun cotton kurta, perfect for summer.",
    price: 1200,
    category: "Apparel",
    material: "Khadi Cotton",
    technique: "Hand-spun",
    isGITagged: false,
    artisanName: "Gram Udyog",
    region: "Gujarat",
    stock: 15
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clears existing products so you don't double up
    await Product.insertMany(sampleProducts);
    console.log("✅ Database Seeded with Traditional Products!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();