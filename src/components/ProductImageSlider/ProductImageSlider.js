import { useState } from "react";
import "./ProductImageSlider.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

const ProductImageSlider = () => {
  const [mainImageRef, setMainImageRef] = useState(image1);

  const handleSubImageClick = (newImage) => {
    setMainImageRef(newImage);
  };

  return (
    <div className="product-image-slider">
      <div className="main-image">
        <img src={mainImageRef} alt="flavaExplorer" />
      </div>
      <div className="sub-images">
        <div className="one sub-image" onClick={() => handleSubImageClick(image1)}>
          <img src={image1} alt="FlavaExplorer" />
        </div>
        <div className="two sub-image" onClick={() => handleSubImageClick(image2)}>
          <img src={image2} alt="FlavaExplorer" />
        </div>
        <div className="three sub-image" onClick={() => handleSubImageClick(image3)}>
          <img src={image3} alt="FlavaExplorer" />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
