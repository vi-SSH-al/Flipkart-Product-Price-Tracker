const express = require("express");
const {
  addProduct,
  recheckPrice,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

// Add or get product by link
router.post("/", addProduct);

// Recheck price for a specific product
router.put("/:productId/recheck", recheckPrice);

// Get all products
router.get("/", getAllProducts);

module.exports = router;
