import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Chuyển trang với 1 tham số trong useNavigate */}
      <button onClick={() => navigate("/about")}>Click go to about</button>
      {/* Sử dụng useNavigate với history */}
      {/* Lùi 2 trang */}
      <button onClick={() => navigate(-2)}>Go 2 page to back</button>
      {/* Lùi 1 trang */}
      <button onClick={() => navigate(-1)}>Go 1 page to back</button>
      {/* Tiến 1 trang */}
      <button onClick={() => navigate(1)}>Go forward </button>

      {/* Sử dụng useNavigate với thuộc tính replace = true */}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to about - not save history
      </button>

      {/* Sử dụng useNavigate để truyền dữ liệu */}
      <button onClick={() => navigate("/about", { state: { id: 12 } })}>
        Go to about with data
      </button>
    </div>
  );
}

export default Product;
