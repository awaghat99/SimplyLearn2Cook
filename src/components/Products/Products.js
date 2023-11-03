import React from "react";
import "./Products.css";
import placeholder from "../../images/cook-about-image.jpg";

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="product-holder">
        <div className="product">
          <h3>Title</h3>
          <img src={placeholder} alt="placeholder" />
          <p>Description</p>
          <span>Price</span>
        </div>
        <div className="product">
          <h3>Title</h3>
          <img src={placeholder} alt="placeholder" />
          <p>Description</p>
          <span>Price</span>
        </div>
        <div className="product">
          <h3>Title</h3>
          <img src={placeholder} alt="placeholder" />
          <p>Description</p>
          <span>Price</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
