import React, { useState } from "react";

const ProductInput = ({ onFetchProduct }) => {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.trim()) {
      onFetchProduct(link);
      setLink("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste Flipkart product link here..."
        className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="mt-4 bg-flipBlue text-flipWhite py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
      >
        Fetch Details
      </button>
    </form>
  );
};

export default ProductInput;
