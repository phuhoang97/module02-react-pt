import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailByIdType() {
  const params = useParams();
  return (
    <div>
      <h2>Course Detail by ID and Type</h2>
      <div>
        Course Type: {params.type} - Course id: {params.id}
      </div>
    </div>
  );
}

export default CourseDetailByIdType;
