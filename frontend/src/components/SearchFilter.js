import React, { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilter = () => {
    onFilter({ minPrice, maxPrice });
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by product title..."
        className="p-3 border rounded-lg border-gray-300 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
        className="p-3 border rounded-lg border-gray-300 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
        className="p-3 border rounded-lg border-gray-300 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"
      />
      <button
        onClick={handleFilter}
        className="bg-flipBlue text-flipWhite py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default SearchFilter;
