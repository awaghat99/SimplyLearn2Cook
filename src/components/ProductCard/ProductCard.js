import React from "react";
import "./ProductCard.css";
import placeholder from "../../images/cook-about-image.jpg";

const ProductCard = (props) => {
  return (
    <div className="product">
      <div className="product-img-title">
        <h3>{props.title}</h3>
        <img src={placeholder} alt="placeholder" />
      </div>
      <div className="product-desc-price">
        <p>{props.description}</p>
        <span>{props.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
