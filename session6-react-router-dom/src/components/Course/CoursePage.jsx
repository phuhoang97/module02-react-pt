import React from "react";
import { useSearchParams } from "react-router-dom";

function CoursePage() {
  // Search Params
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Course Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>ReactJS</th>
            <th>1200</th>
            <th>
              <button
                onClick={() =>
                  setSearchParam({ courseName: "ReactJS", time: 1200 })
                }
              >
                Detail
              </button>
            </th>
          </tr>

          <tr>
            <th>2</th>
            <th>NodeJS</th>
            <th>1400</th>
            <th>
              <button
                onClick={() =>
                  setSearchParam({ courseName: "NodeJS", time: 1400 })
                }
              >
                Detail
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiết khóa học</h3>
      <p>Tên khóa học: {searchParam.get("courseName")}</p>
      <p>Thời gian học: {searchParam.get("time")}</p>
    </div>
  );
}

export default CoursePage;
