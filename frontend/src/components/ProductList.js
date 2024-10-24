import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRecheckPrice }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onRecheckPrice={onRecheckPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
