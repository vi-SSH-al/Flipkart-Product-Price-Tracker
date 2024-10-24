import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Home = () => {
  const [link, setLink] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(BASE_URL + "/products");

      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link) {
      try {
        await axios.post(BASE_URL + "/products", { link });
        setLink("");
        fetchProducts();
      } catch (error) {
        console.error("Error submitting product:", error);
      }
    }
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      // Convert price to a string to handle replace function
      const productPrice = String(product.price).replace(/[^\d]/g, ""); // Ensure price is in digits

      const matchesTitle =
        titleSearch === "" ||
        product.title.toLowerCase().includes(titleSearch.toLowerCase());
      const matchesPriceRange =
        (minPrice === "" || productPrice >= parseInt(minPrice)) &&
        (maxPrice === "" || productPrice <= parseInt(maxPrice));

      return matchesTitle && matchesPriceRange;
    });

    setFilteredProducts(filteredProducts);
  };
  useEffect(() => {
    handleFilter();
  }, [titleSearch]);
  return (
    <div className="container mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Flipkart Product Price Tracker
      </h1>
      <form className="mb-8" onSubmit={handleSubmit}>
        {/* Input Product URL */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter Flipkart product link"
            className="w-full lg:w-1/2 p-3 rounded-lg bg-gray-800 text-white shadow-xl"
          />
          {/* Fetch button */}
          <button
            type="submit"
            className="ml-4 bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg shadow-xl text-gray-900 font-semibold"
          >
            Fetch Details
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Search by title"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
            className="w-1/3 p-3 rounded-lg bg-gray-800 text-white shadow-xl"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/6 p-3 rounded-lg bg-gray-800 text-white shadow-xl"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/6 p-3 rounded-lg bg-gray-800 text-white shadow-xl"
          />
          <button
            type="button"
            onClick={handleFilter}
            className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg shadow-xl text-gray-900 font-semibold"
          >
            Apply Filters
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
