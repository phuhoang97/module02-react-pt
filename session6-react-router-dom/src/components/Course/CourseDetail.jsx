import React from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Detail khóa học</h2>
      <div>Id khóa học là : {params.id}</div>
    </div>
  );
}

export default CourseDetail;
