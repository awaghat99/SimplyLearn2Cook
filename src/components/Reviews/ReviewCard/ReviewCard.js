import React from "react";
import "./ReviewCard.css";
import Star from "../Star/Star";
import placeholder from "../../../images/cook-about-image.jpg";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div>
        <Star stars={4.5} />
      </div>
      <h2>Ultimate cooking companion</h2>
      <div className="img-and-review">
        <img src={placeholder} alt="placeholder" />
        <div className="review-text">
          <p>
            The FlavaExplorer is literally all you need to get cooking! We’ve had so much fun at home trying
            all the dishes! I just wish there were more recipes…
          </p>
          <p>Ebrahim, Parent</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
