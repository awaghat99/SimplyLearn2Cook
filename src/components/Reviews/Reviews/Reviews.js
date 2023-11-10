import React from "react";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard";
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
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
