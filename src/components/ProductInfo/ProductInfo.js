import React from "react";
import "./ProductInfo.css";
import Star from "../Reviews/Star/Star";

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="star-reviews">
        <Star stars={4.5} />
        <span className="green">4.5 {"   "}(12)</span>
      </div>
      <div>
        <h2 className="red">Flava Explorer</h2>
        <p className="red">£49.99</p>
      </div>
      <button>Add to basket</button>
    </div>
  );
};

export default ProductInfo;
