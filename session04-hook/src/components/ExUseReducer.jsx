import React, { useReducer, useState } from "react";

function ExUseReducer() {
  // useReducer là một hàm trong react hook
  // Trong hook useReducer được cung cấp như 1 sự lựa chọn thay thế cho useState
  // useState được sử dụng trong các component đơn giản
  // useReducer được sử dụng trong các component phức tạp hơn

  // Sử dụng useState
  // 1. InitialState: 0
  // 2. Action: Up(state + 1), Down(state -1)

  const [count, setCount] = useState(0);

  // Sử dụng useReducer
  // 1. InitialState: 0
  // 2. Action: Up(state + 1), Down(state - 1)
  // 3. Reducer
  // 4. Dispath

  // Bước 1: Khởi tạo giá trị ban đầu
  const initState = 0;

  // Bước 2: Action
  const UP_ACTION = "up";
  const DOWN_ACTION = "down";

  // Bước 3: Reducer
  // Reducer sẽ nhận vào 2 tham số:
  // + 1 là state hiện tại
  // + 2 là action
  // Mỗi khi reducer được gọi thì sẽ dựa vào state hiện tại và action là gì để quyết định trả về state mới
  const reducer = (state, action) => {
    console.log("Reducer Run");
    console.log("action ==>", action);
    console.log("state ==>", state);
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Invalid Action");
    }
  };

  // Bước 4: Dispatch: useReducer có thể nhận vào 3 đối số
  // Khi component được chạy => sẽ chạy useReducer nhưng sẽ chưa gọi reducer
  // sẽ nhận giá trị khởi tạo là initstate và return về 1 array([count, dispatch])
  // Trong đó:
  // count sẽ là giá trị khởi tạo ban đầu
  // như useState thì giá trị thứ 2 sẽ là setCount, Nhưng trong reducer giá trị thứ 2 sẽ được thay thế bằng dispatch

  const [countReducer, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>
        <h3>useState</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>
      </div>

      <div>
        <h3>useReducer</h3>
        <p>Count: {countReducer}</p>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button>Random</button>
      </div>
    </div>
  );
}

export default ExUseReducer;
