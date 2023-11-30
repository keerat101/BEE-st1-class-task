const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Update a review by ID within a product
router.put('/:productId/reviews/:reviewId', async (req, res) => {
  const { productId, reviewId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = product.reviews.id(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Update review fields
    review.content = req.body.content || review.content;
    review.rating = req.body.rating || review.rating;
    review.author = req.body.author || review.author;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a review by ID within a product
router.delete('/:productId/reviews/:reviewId', async (req, res) => {
  const { productId, reviewId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = product.reviews.id(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Remove the review
    review.remove();
    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
