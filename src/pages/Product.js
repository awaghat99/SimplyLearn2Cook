import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductImageSlider from "../components/ProductImageSlider/ProductImageSlider";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductDescription from "../components/ProductDescription/ProductDescription";

const Product = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
    if (location.hash === "#description") {
      const descriptionElement = document.getElementById("product-description");
      if (descriptionElement) {
        descriptionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="product-page">
      <div className="image-and-info">
        <ProductImageSlider />
        <ProductInfo />
      </div>
      <div id="product-description">
        <ProductDescription />
      </div>
    </div>
  );
};

export default Product;
