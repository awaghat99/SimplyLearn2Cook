import React from "react";
import "./Splash.css";
import ImageSlide from "../ImageSlider/ImageSlide";

const Splash = () => {
  const slides = [
    { url: require("../../images/Leonardo_Diffusion_XL.jpg"), title: "image-1" },
    { url: require("../../images/image2.png"), title: "image-2" },
    { url: require("../../images/image3.png"), title: "image-3" },
    { url: require("../../images/image4.png"), title: "image-4" },
    { url: require("../../images/image5.jpeg"), title: "image-5" },
  ];
  return (
    <div className="slider-wrapper">
      <ImageSlide slides={slides} />
    </div>
  );
};

export default Splash;
