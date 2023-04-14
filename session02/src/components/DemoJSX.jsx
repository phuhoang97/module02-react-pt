import React, { Component } from "react";

export default class DemoJSX extends Component {
  render() {
    // Truyền biến theo JSX
    // Kiểu dữ liệu nguyên thủy
    const numb = 10;
    const strUser = "Nguyễn Văn A";

    // Kiểu dữ liệu phức tạp
    const arrPeople = [1, 2, 3, 4];
    const objPeople = {
      name: "Hà",
      age: 18,
    };
    return (
      <div>
        <h2>Kiểu dữ liệu nguyên thủy</h2>
        <div>{numb}</div>
        <div>{strUser}</div>
        <h2>Kiểu dữ liệu phức tạp</h2>
        <div>{arrPeople.toString()}</div>
        <div>{objPeople.name}</div>
        <div>{objPeople.age}</div>
        {/* 
            Lưu ý khi sử dụng JSX 
            class => className 
            onclick => onClick , ...
            tên các phương thức sẽ viết theo kiểu camelcase
        */}
      </div>
    );
  }
}
