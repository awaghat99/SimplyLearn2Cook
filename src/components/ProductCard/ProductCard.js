import React from "react";
import "./ProductCard.css";
import productImage from "../../images/image3.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="product-section">
      <h2> Our Product</h2>
      <div className="product-card">
        <div className="product-card-image-holder">
          <img src={productImage} alt="flava-explorer" />
        </div>
        <div className="product-details">
          <h3>FlavaExplorer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium metus. Vivamus ornare
            sollicitudin lacus vitae semper. Ut volutpat odio a elit accumsan varius. Nunc elit leo,
            consectetur non fermentum ut, vehicula quis dolor.
          </p>
          <div className="product-buttons">
            <Link to="/product">
              <button>Buy Now</button>
            </Link>
            <Link to="/product">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
