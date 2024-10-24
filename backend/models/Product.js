const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  reviews: [{ type: String }],
  image_url: { type: String },
  totalPurchases: { type: String, required: true },
  rating: { type: String },
  priceHistory: [
    {
      price: { type: Number, required: true },
      checkedAt: { type: Date, default: Date.now },
    },
  ],
  link: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
