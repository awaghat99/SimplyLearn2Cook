import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { productDetails } from "../../utils/ProductDetails";
import "react-slideshow-image/dist/styles.css";

const ProductCard = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div className="product-section">
      <h2> Our Product</h2>
      <div className="product-card">
        <div className="product-card-image-holder">
          <Slide arrows={false} duration={2000} canSwipe={false} pauseOnHover={false}>
            {productDetails.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, backgroundImage: `url(${slideImage.image})` }}></div>
              </div>
            ))}
          </Slide>
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
