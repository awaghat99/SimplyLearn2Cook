import React from "react";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import ProductInfo from "../components/ProductInfo/ProductInfo";

const Product = () => {
  return (
    <div>
      <div className="image-and-info">
        <ProductImageSlider />
        <ProductInfo />
      </div>
    </div>
  );
};

export default Product;
