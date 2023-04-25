import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const productId = useLocation();
  return (
    <div>
      Đây là trang About
      {console.log(productId)}
    </div>
  );
}

export default About;
