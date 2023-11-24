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
              <h2>{props.classInfo.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="book-now-box">
            <div className="book-now-img" style={{ backgroundImage: `url(${props.classInfo.img})` }}></div>
            <button>Book Now</button>
          </div>
          <QuickDetails classInfo={props.classInfo} />
          <div className="detailed-description">
            <h2>Immerse yourself in the wonderful world of Indian street food!</h2>
            <p className="regular">
              In this fun-packed 2-hour class, we’ll cook up a beautiful tandoori-style chicken and the
              fluffiest naan breads. Plus, you’ll learn how to make a delicious filling for panipuri (a crispy
              street food snack), accompanied by a fresh cucumber raita. Our chefs will demonstrate how to
              plate up your Indian street food feast, before you sit down to enjoy your handmade creations.
              You’ll leave us with the confidence to cook using a variety of spices, and the ability to whip
              up some seriously impressive dishes!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassPageComponent;
