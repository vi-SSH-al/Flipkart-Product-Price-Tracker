import React from "react";
import PriceHistory from "./PriceHistory";
import axios from "axios";

const ProductCard = ({ product }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleRecheck = async () => {
    try {
      console.log("Product id is :", BASE_URL);
      await axios.put(BASE_URL + `/${product._id}/recheck`);
      window.location.reload(); // Refresh the page to show updated
    } catch (error) {
      console.error("Error rechecking price:", error);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <img
        src={product.image_url}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Product Title */}
      <h2 className="text-xl font-semibold text-yellow-400 mb-2">
        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {product.title}
        </a>
      </h2>

      {/* Product Price */}
      <div className="text-white font-bold text-lg mb-2">₹{product.price}</div>

      {/* Product Description */}
      <p className="text-gray-300 text-sm mb-2">{product.description}</p>

      {/* Product Rating */}
      <p className="text-gray-400 text-sm mb-2">Rating: {product.rating} ★</p>

      {/* Total Purchases */}
      <p className="text-sm text-gray-400 mb-2">
        Total Purchases: {product.totalPurchases}
      </p>

      {/* Reviews */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          Top Reviews:
        </h3>
        <ul className="text-gray-300 text-sm">
          {product.reviews.slice(0, 3).map((review, idx) => (
            <li key={idx} className="mb-2">
              - {review}
            </li>
          ))}
        </ul>
      </div>

      {/* Recheck Price Button */}
      <button
        onClick={handleRecheck}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg mt-4 w-full text-center"
      >
        Recheck Price
      </button>

      {/* Price History */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          Price History:
        </h3>
        <PriceHistory priceHistory={product.priceHistory} />
      </div>
    </div>
  );
};

export default ProductCard;
