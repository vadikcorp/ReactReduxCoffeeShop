import React from "react";

const ProductHeader = ({ product }) => {
  return (
    <p className="hero_header">
      <span className="hero_name">{product}</span>
    </p>
  );
};

export default ProductHeader;
