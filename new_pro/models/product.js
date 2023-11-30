const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: { type: String, required: true, maxLength: 500 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const productSchema = new Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, required: true, maxLength: 1000 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  reviews: [reviewSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
