import React from "react";
import { Link } from "react-router-dom";
import "./ClassesCard.css";

const ClassesCard = (props) => {
  return (
    <div className="classes-card">
      <div className="classes-card-image-holder" style={{ backgroundImage: `url(${props.img})` }}></div>
      <div className="classes-details">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="classes-buttons">
          <Link to={`/class/${props.id}`}>
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
