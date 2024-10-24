const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const { connectDB } = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/v1/products", productRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
