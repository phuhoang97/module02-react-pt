import React, { useEffect, useState } from "react";

function ExUseEffect() {
  // Nhiệm vụ của UseEffect:
  // CallAPI - Gọi dữ liệu từ API để trả về cho front-end
  // Listen DOM Event: Lắng nghe sự kiện của DOM
  // Update DOM
  // ClearUp ,....

  // Trong useEffect có 3 trường hợp chính
  // Trường hợp 1: không có cleanUp
  // Cú pháp: useEffect(() => {});
  // Tính chất:
  // + Callback luôn được gọi sau khi component mounted
  // + Callback sẽ được gọi mỗi khi component re-render
  // + Gọi callback ngay sau khi component thêm vào DOM

  // Trường hợp thứ 2: Có cleanUp hay phiên bản mới gọi là dependecies / deps
  // Cú pháp: useEffect(() => {}, []);
  // Tính chất:
  // + Callback luôn được gọi sau khi component mounted
  // + Chỉ gọi callback 1 lần sau khi component mounted

  // Trường hợp 3: Có cleanUp và dependecies
  // Cú pháp: useEffect(() => {}, [deps])
  // Tính chất:
  // + Callback luôn được gọi sau khi component mounted
  // + Callback sẽ được gọi mỗi khi dependecies thay đổi

  //   const [title, setTitle] = useState("");

  //   console.log(title);

  // Trường hợp 1
  //   useEffect(() => {
  //     console.log("Mount");
  //   });

  // Trường hợp 2
  //   useEffect(() => {
  //     console.log("Mount");
  //   }, []);
  const [count, setCount] = useState(0);
  const [arrList, setArrList] = useState([1, 2, 3, 4]);

  const handleAddNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  useEffect(() => {
    console.log("Được gọi khi render và khi component thay đổi");
  }, [count, arrList]);
  return (
    <div>
      <h4>useEffect</h4>
      {/* <input type='text' onChange={(e) => setTitle(e.target.value)} /> */}
      {console.log("re-render")}

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>
      </div>

      <div>
        <p>List Array: {arrList.toString()}</p>
        <button onClick={handleAddNumber}>Add Random Number</button>
      </div>
    </div>
  );
}

export default ExUseEffect;
