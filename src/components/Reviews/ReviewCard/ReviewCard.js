import React, { useState } from "react";
import "./ReviewCard.css";
import Star from "../Star/Star";
import productImage from "../../../images/image1.png";

const ReviewCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="review-card">
      <div>
        <Star stars={props.stars} />
      </div>
      <h2>{props.heading}</h2>
      <div className="img-and-review">
        <img src={productImage} alt="product" />
        <div className={`review-text ${isExpanded ? "expanded" : ""}`}>
          <p>{props.review}</p>
          {props.review.length > 175 && (
            <span className="read-more" onClick={toggleReadMore}>
              {isExpanded ? "Read less" : "Read more"}
            </span>
          )}
          <p>{props.reviewer}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
