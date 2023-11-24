import React from "react";
import "./Splash.css";
import ImageSlide from "../ImageSlider/ImageSlide";

const Splash = () => {
  const slides = [
    {
      url: require("../../images/image1.png"),
      buttons: [
        { text: "Buy Now", link: "/product" },
        { text: "Learn More", link: "/product" },
      ],
    },
    {
      url: require("../../images/image2.jpeg"),
      buttons: [
        { text: "Book Now", link: "/coming-soon" },
        { text: "Learn More", link: "/coming-soon" },
      ],
    },
  ];
  return (
    <div className="slider-wrapper">
      <ImageSlide slides={slides} />
    </div>
  );
};

export default Splash;
