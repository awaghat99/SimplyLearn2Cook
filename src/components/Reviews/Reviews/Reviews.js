import React from "react";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import { reviews } from "../../../utils/ReviewsJson";
import Star from "../Star/Star";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Reviews = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="review">
      <div className="review-title">
        <h3 className="red">FlavaExplorer Customer Reviews</h3>
        <div className="review-count-stars">
          <div>
            <Star stars={4.5} />
          </div>
          <p>20 Reviews</p>
        </div>
      </div>
      <div className="review-card-holder">
        <Slide arrows={false} responsive={responsiveSettings} pauseOnHover={false}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              stars={review.stars}
              heading={review.heading}
              review={review.review}
              reviewer={review.reviewer}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Reviews;
