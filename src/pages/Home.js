import React from "react";
import Splash from "../components/Splash/Splash";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews";
import Splash2 from "../components/Splash2/Splash2";
import Products from "../components/Products/Products";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Splash />
      <About />
      <Reviews />
      <Splash2 />
      <Products />
      <Contact />
    </div>
  );
};

export default Home;
