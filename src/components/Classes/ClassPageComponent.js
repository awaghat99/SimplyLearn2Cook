import React from "react";
import "./ClassPageComponent.css";
import QuickDetails from "./QuickDetails/QuickDetails";

const ClassPageComponent = (props) => {
  return (
    <div>
      {props.classInfo && (
        <>
          <div className="class-page-splash" style={{ backgroundImage: `url(${props.classInfo.img})` }}>
            <div className="class-splash-content">
              <h2>{props.classInfo.mainTitle}</h2>
              <p>{props.classInfo.subTitle}</p>
            </div>
          </div>
          <div className="book-now-box">
            <div className="book-now-img" style={{ backgroundImage: `url(${props.classInfo.img})` }}></div>
            <button>Book Now</button>
          </div>
          <QuickDetails classInfo={props.classInfo} />
          <div className="detailed-description">
            <h2>{props.classInfo.descriptionTitle}</h2>
            <p className="regular">{props.classInfo.fullDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassPageComponent;
