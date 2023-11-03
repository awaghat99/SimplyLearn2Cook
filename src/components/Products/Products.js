import React from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import { productDetails } from "../../utils/ProductDetails";

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="product-holder">
        <ProductCard
          title={productDetails[0].title}
          description={productDetails[0].description}
          price={productDetails[0].price}
        />
        <ProductCard
          title={productDetails[0].title}
          description={productDetails[0].description}
          price={productDetails[0].price}
        />
        <ProductCard
          title={productDetails[0].title}
          description={productDetails[0].description}
          price={productDetails[0].price}
        />
      </div>
    </section>
  );
};

export default Products;
