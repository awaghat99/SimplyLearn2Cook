import React from "react";
import "./Story.css";
import guardian from "../../images/guardian.png";

const Story = () => {
  return (
    <div className="story">
      <div className="story-text">
        {" "}
        <p>
          Our Story began one summer, when on his lunch break, a chef from Blackburn realised young people are
          forgetting how to cook!
          <br /> Determined to start a revolution, he began formulating ideas for cooking workshops
          <br /> And over time the ideas has morphed into a platform, with a great emphasis on the importance
          of a healthy lifestyle
          <br />
        </p>
        <h2>Why?</h2>
        <p>
          There’s an ongoing child obesity epidemic; and it’s accelerating
          <br /> –37.7% of children aged 10 & 11 within the UK are obese or overweight
          <br /> –Since 2006 the proportion of obese 10- & 11-year-olds has risen, such that now more than 11
          Year 6 children out of 50 are obese
          <br /> The stats and facts show the need for effective interventions to tackle childhood obesity and
          to promote healthy lifestyles
          <br /> Practical cooking skills are not being taught anymore in UK schools- there’s a gap in the
          market
        </p>
      </div>
      <img src={guardian} alt="guardian-article" />
      <div className="story-text">
        <p>
          But worry not; we’re here to help <br />
          Cooking is a life lesson- it’s as simple as that
        </p>
      </div>
    </div>
  );
};

export default Story;
