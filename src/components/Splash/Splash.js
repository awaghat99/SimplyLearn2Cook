import React from "react";
import "./Splash.css";
import ImageSlide from "../ImageSlider/ImageSlide";

const Splash = () => {
  const slides = [
    { url: require("../../images/image1.png"), title: "image-1" },
    { url: require("../../images/image2.jpeg"), title: "image-2" },
  ];
  return (
    <div className="slider-wrapper">
      <ImageSlide slides={slides} />
    </div>
  );
};

export default Splash;
