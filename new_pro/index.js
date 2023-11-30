const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://keeratjagga101:jaggaji2003@cluster0.sfpdl5c.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/products', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
