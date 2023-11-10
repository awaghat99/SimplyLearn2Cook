import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2 className="green">
          We are a social enterprise that believes in the power of cooking as a way to promote health,
          well-being and social inclusion.
        </h2>
        <p>
          Our aim is to inspire children and families to discover the joy of preparing and sharing delicious
          meals, while learning new skills and having fun. <br />
          We offer our © FlavaExplorer starter kit, cooking workshops (live streaming and in-person) and
          competitions!
          <br />
          Whether you are a school, a community group, a business or an individual, we can help you cook up a
          storm
        </p>
      </div>
    </section>
  );
};

export default About;
