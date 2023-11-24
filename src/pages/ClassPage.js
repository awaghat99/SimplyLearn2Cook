import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { classesInfo } from "../utils/ClassesInfo";

const ClassPage = () => {
  const [classInfo, setClassInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getImageForId = (id) => {
      const classInfo = classesInfo.find((classItem) => classItem.id === id);

      if (classInfo) {
        setClassInfo(classInfo);
      } else {
        setClassInfo(classesInfo[0]);
      }
    };

    getImageForId(id);
  }, [id]);

  return (
    <div>
      {classInfo && (
        <>
          <h1>{classInfo.title}</h1>
          <img src={classInfo.img} alt={`Class ${classInfo.id}`} style={{ width: "100%", height: "auto" }} />
          <p>{classInfo.description}</p>
        </>
      )}
    </div>
  );
};

export default ClassPage;
