import React from "react";
import "./Classes.css";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const classesInfo = [
    {
      title: "Croissant",
      img: require("../../images/cook-about-image.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium metus. Vivamus ornare sollicitudin lacus vitae semper. Ut volutpat odio a elit accumsan varius.",
    },
    {
      title: "Croissant",
      img: require("../../images/cook-about-image.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium metus. Vivamus ornare sollicitudin lacus vitae semper. Ut volutpat odio a elit accumsan varius.",
    },
    {
      title: "Croissant",
      img: require("../../images/cook-about-image.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium metus. Vivamus ornare sollicitudin lacus vitae semper. Ut volutpat odio a elit accumsan varius.",
    },
  ];

  return (
    <div className="classes-section">
      <h2>Our Classes</h2>
      <div className="classes-card-holder">
        {classesInfo.map((myClass, classIndex) => {
          return (
            <ClassesCard
              img={myClass.img}
              title={myClass.title}
              description={myClass.description}
              index={classIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
