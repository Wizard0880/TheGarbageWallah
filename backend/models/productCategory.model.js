import mongoose from 'mongoose';

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Plastic', 'Paper', 'E-Waste'], // Only allow these categories
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

export default ProductCategory;