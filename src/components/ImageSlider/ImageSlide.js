import "./ImageSlide.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const ImageSlide = (props) => {
  return (
    <div>
      <Slide duration={4000} pauseOnHover={false}>
        {props.slides.map((slideImage, index) => (
          <div key={index} className="slide-for-splash" style={{ backgroundImage: `url(${slideImage.url})` }}>
            <div className="button-holder">
              {slideImage.buttons.map((button, buttonIndex) => {
                return (
                  <Link to={button.link}>
                    <button key={buttonIndex}>{button.text}</button>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlide;
