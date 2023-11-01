import React from "react";
import splashscreen from "../../images/cookscreen.jpg";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash">
      <img className="splash-image" src={splashscreen} alt="splashScreen" />
      <div className="splash-text">
        <h1>
          Teach<br></br> Kids to cook
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis elit nulla, sit amet
          pellentesque enim dapibus id. Nullam libero lorem, vehicula non neque id, feugiat aliquam augue.
          Nullam suscipit ultrices pulvinar. Integer eget pharetra leo.
        </p>
      </div>
    </div>
  );
};

export default Splash;
