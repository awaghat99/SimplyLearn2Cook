import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { classesInfo } from "../utils/ClassesInfo";
import ClassPageComponent from "../components/Classes/ClassPageComponent";

const ClassPage = () => {
  const [classInfo, setClassInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getImageForId = (id) => {
      const classInfo = classesInfo.find((classItem) => classItem.id === id);

      if (classInfo) {
        setClassInfo(classInfo);
      }
    };

    getImageForId(id);
  }, [id]);

  return <div>{classInfo ? <ClassPageComponent classInfo={classInfo} /> : "Not Found"}</div>;
};

export default ClassPage;
