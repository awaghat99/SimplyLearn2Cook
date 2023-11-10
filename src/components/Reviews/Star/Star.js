import React from "react";
import "./Star.css";
import star from "../../../images/star.svg";
import filledStar from "../../../images/filled_star.svg";
import halfStar from "../../../images/half_star.svg";

const Star = (props) => {
  // Ensure the rating is between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, props.stars));

  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src={filledStar} alt="filled star" />);
    }

    if (hasHalfStar) {
      stars.push(<img key="half" src={halfStar} alt="half star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src={star} alt="empty star" />);
    }

    return stars;
  };

  return <div className="star-container">{renderStars()}</div>;
};

export default Star;
