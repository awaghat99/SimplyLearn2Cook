import React from "react";
import { Link } from "react-router-dom";
import "./ClassesCard.css";

const ClassesCard = (props) => {
  return (
    <div className="classes-card">
      <div className="classes-card-image-holder">
        <img src={props.img} alt={`${props.title}-class`} />
      </div>
      <div className="classes-details">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="classes-buttons">
          <Link to="/class">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
