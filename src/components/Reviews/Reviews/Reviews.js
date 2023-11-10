import React from "react";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import { reviews } from "../../../utils/ReviewsJson";
import Star from "../Star/Star";

const Reviews = () => {
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
        {reviews.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              stars={review.stars}
              heading={review.heading}
              review={review.review}
              reviewer={review.reviewer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
