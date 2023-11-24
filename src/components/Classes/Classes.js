import React from "react";
import "./Classes.css";
import ClassesCard from "./ClassesCard";
import { classesInfo } from "../../utils/ClassesInfo";

const Classes = () => {
  return (
    <div className="classes-section" id="classes-section">
      <h2>Our Classes</h2>
      <div className="classes-card-holder">
        {classesInfo.map((myClass, classIndex) => {
          return (
            <ClassesCard
              id={myClass.id}
              img={myClass.img}
              title={myClass.title}
              description={myClass.description}
              key={classIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
