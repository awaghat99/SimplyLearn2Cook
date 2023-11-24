import React from "react";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductDescription from "../components/ProductDescription/ProductDescription";

const Product = () => {
  return (
    <div className="product-page">
      <div className="image-and-info">
        <ProductImageSlider />
        <ProductInfo />
      </div>
      <ProductDescription />
    </div>
  );
};

export default Product;
