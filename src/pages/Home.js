import React from "react";
import Splash from "../components/Splash/Splash";
import About from "../components/About/About";

import Reviews from "../components/Reviews/Reviews";
import Products from "../components/Products/Products";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Splash />
      <About />
      <Reviews />
      <Products />
      <Contact />
    </div>
  );
};

export default Home;
