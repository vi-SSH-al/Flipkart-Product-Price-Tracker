const Product = require("../models/Product");
const { fetchFlipkartProductDetails } = require("../services/flipkartScraper");

// Add or fetch a product
const addProduct = async (req, res) => {
  const { link } = req.body;

  try {
    const existingProduct = await Product.findOne({ link });

    if (existingProduct) {
      return res.json(existingProduct); // Return product if already in the database
    }

    const productData = await fetchFlipkartProductDetails(link);
    // console.log(productData);
    const newProduct = new Product({
      ...productData,
      link,
      priceHistory: [{ price: productData.price }],
    });
    console.log(newProduct);
    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error adding product", error: error });
  }
};

// Recheck the price and add to history
const recheckPrice = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedData = await fetchFlipkartProductDetails(product.link);
    const currentPrice = parseFloat(updatedData.price);

    product.price = currentPrice;
    product.priceHistory.push({ price: currentPrice });
    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error rechecking price" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

module.exports = {
  addProduct,
  recheckPrice,
  getAllProducts,
};
