import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

function Checkout() {
  const isLogin = false;
  return (
    <div>
      {/* Sử dụng Navigate để chuyển trang khi điều kiện đúng */}
      {isLogin ? <Home /> : <Navigate to={"/login"} />}
    </div>
  );
}

export default Checkout;
