const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., Saree, Stole, Home Decor
  material: { type: String, required: true }, // e.g., Mulberry Silk, Khadi
  technique: { type: String }, // e.g., Ikat, Banarasi, Jamdani
  isGITagged: { type: Boolean, default: false }, // Geographical Indication tag
  images: [{ type: String }], // Array of URLs
  artisanName: { type: String },
  region: { type: String }, // e.g., Odisha, West Bengal, Tamil Nadu
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);