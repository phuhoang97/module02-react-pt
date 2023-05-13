import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_up, act_down } from "../action";

function CountComp() {
  // Sử dụng useSelector để lấy state
  const count = useSelector((state) => state.count);

  // Sử dụng dispatch để gửi action lên
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Demo Redux</h2>
      <p>value: {count}</p>
      <button onClick={() => dispatch(act_up(5))}>Up</button>
      <button onClick={() => dispatch(act_down(3))}>Down</button>
    </div>
  );
}

export default CountComp;
