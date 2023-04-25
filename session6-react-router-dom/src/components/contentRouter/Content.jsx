import React from "react";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <div>
      Đây là content
      {/* Giúp định vị các router con */}
      <Outlet />
    </div>
  );
}

export default Content;
