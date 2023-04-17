// rsf rfce rfc => Để sử dụng cú pháp cần phải cài "simple react snippets"

import React, { useState } from "react";

function ExUseState() {
  // Khởi tạo state
  // const [state, setState] = useState(initialState);
  // Trong đó:
  // + state: chính là giá trị initialState
  // + setState: Chính là set lại giá trị cho state
  // + initialState là giá trị khởi tạo

  // 2 kiểu dữ liệu chính: Kiểu dữ liệu nguyên thủy và kiểu dữ liệu phức tạp
  // + Kiểu dữ liệu nguyên thủy:
  // Number
  const [count, setCount] = useState(0);

  // String
  const [text, setText] = useState("Hello World");

  const handleChangeText = () => {
    setText("Xin chào cả lớp");
  };

  // Kiểu dữ liệu phức tạp: Array, Object
  // Array
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const handleAddNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // Object
  const [objList, setObjList] = useState({
    countObj: 1,
    arrNumber: [3, 5, 7],
  });

  const handleAddObj = () => {
    setObjList({
      countObj: objList.countObj,
      arrNumber: [...objList.arrNumber, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h3>Kiểu dữ liệu nguyên thủy</h3>
      <h4>Number</h4>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>
      </div>
      <h4>String</h4>
      <div>
        <p>Text: {text}</p>
        <button onClick={handleChangeText}>Click Change Text</button>
      </div>
      <h3>Kiểu dữ liệu phức tạp</h3>
      <h4>Array</h4>
      <div>
        <p>List Array: {arrList.toString()}</p>
        <button onClick={handleAddNumber}>Add Random Number</button>
      </div>
      <h4>Object</h4>
      <div>
        <p>Count in Object: {objList.countObj}</p>
        <button
          onClick={() =>
            setObjList({
              countObj: objList.countObj + 1,
              arrNumber: objList.arrNumber,
            })
          }
        >
          Up
        </button>
        <button
          onClick={() =>
            setObjList({
              countObj: objList.countObj - 1,
              arrNumber: objList.arrNumber,
            })
          }
        >
          Down
        </button>

        <p>ArrayNumber in Object: {objList.arrNumber}</p>
        <button onClick={handleAddObj}>Add Number In Obj</button>
      </div>
    </div>
  );
}

export default ExUseState;
