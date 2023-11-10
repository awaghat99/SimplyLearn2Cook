import React from "react";
import "./ReviewCard.css";
import Star from "../Star/Star";
import placeholder from "../../../images/cook-about-image.jpg";

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <div>
        <Star stars={props.stars} />
      </div>
      <h2>{props.heading}</h2>
      <div className="img-and-review">
        <img src={placeholder} alt="placeholder" />
        <div className="review-text">
          <p>{props.review}</p>
          <p>{props.reviewer}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
