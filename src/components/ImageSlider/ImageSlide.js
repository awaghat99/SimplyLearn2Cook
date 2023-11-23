import { useCallback, useEffect, useRef, useState } from "react";
import "./ImageSlide.css";
import arrowLeft from "../../images/arrow-left.svg";

const ImageSlide = (props) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    isFirstSlide ? setCurrentIndex(props.slides.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const goNextSlide = useCallback(() => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    isLastSlide ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  }, [currentIndex, props.slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goNextSlide();
    }, 2000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [goNextSlide]);

  return (
    <div className="image-slide-container">
      <img className="left-arrow" src={arrowLeft} alt="arrow-left" onClick={goPreviousSlide} />
      <img className="right-arrow" src={arrowLeft} alt="arrow-left" onClick={goNextSlide} />
      <div
        className="image-slide"
        style={{ backgroundImage: `url(${props.slides[currentIndex].url})` }}></div>
      <div className="dot-holder">
        {props.slides.map((slide, slideIndex) => {
          return (
            <div
              className="dot"
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex);
              }}>
              &#8226;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlide;
