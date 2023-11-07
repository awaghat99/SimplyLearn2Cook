import { useState } from "react";
import "./ImageSlide.css";
import arrowLeft from "../../images/arrow-left.svg";

const ImageSlide = ({ slides }) => {
  const [currentIndex] = useState(0);

  console.log(`url(${slides[currentIndex].url})`);

  return (
    <div className="image-slide-container">
      <img className="left-arrow" src={arrowLeft} alt="arrow-left" />
      <img className="right-arrow" src={arrowLeft} alt="arrow-left" />
      <div className="image-slide" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
    </div>
  );
};

export default ImageSlide;
