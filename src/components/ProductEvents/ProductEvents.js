import React from "react";
import "./ProductEvents.css";
import events from "../../images/events.png";
import image1 from "../../images/image1.png";

const ProductEvents = () => {
  return (
    <div className="product-events">
      <div className="product block">
        <div className="product-text text">
          <h2>Buy ©FlavaExplorer</h2>
        </div>
        <div className="product-image image">
          <img src={image1} alt="flavabox" />
        </div>
      </div>
      <div className="events block">
        <div className="events-image image">
          <img src={events} alt="cooking-event" />
        </div>
        <div className="events-text text">
          <h2>Events</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductEvents;
