import React, { useState } from "react";

function Practice1() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Thực hành 01</h2>
      <p style={{ fontSize: "50px" }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}

export default Practice1;
