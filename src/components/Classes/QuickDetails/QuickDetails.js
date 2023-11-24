import React from "react";
import "./QuickDetails.css";
import tag from "../../../icons/tag.svg";
import timer from "../../../icons/timer.svg";
import cutlery from "../../../icons/cutlery.svg";
import tagOutline from "../../../icons/tagOutline.svg";
import person from "../../../icons/person.svg";

const QuickDetails = (props) => {
  return (
    <div className="quick-details">
      <h3>Quick details</h3>
      <div className="quick-details-sub">
        <img src={tag} alt="tag" />
        <p className="quick-detail-title">Category: </p>
        <p className="regular"> {props.classInfo.quickInfo.category}</p>
      </div>
      <div className="quick-details-sub">
        <img src={timer} alt="tag" />
        <p className="quick-detail-title">Duration: </p>
        <p className="regular"> {props.classInfo.quickInfo.duration}</p>
      </div>
      <div className="quick-details-sub">
        <img src={cutlery} alt="tag" />
        <p className="quick-detail-title">Cuisine Type: </p>
        <p className="regular"> {props.classInfo.quickInfo.cuisineType}</p>
      </div>
      <div className="quick-details-sub">
        <img src={tagOutline} alt="tag" />
        <p className="quick-detail-title">Class Type: </p>
        <p className="regular"> {props.classInfo.quickInfo.classType}</p>
      </div>
      <div className="quick-details-sub">
        <img src={person} alt="tag" />
        <p className="quick-detail-title">Age Minimum: </p>
        <p className="regular"> {props.classInfo.quickInfo.ageMinimum}</p>
      </div>
    </div>
  );
};

export default QuickDetails;
