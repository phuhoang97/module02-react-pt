import React, { Component } from "react";
import CompChill from "./CompChill";
// import CompChillFunc from "./CompChillFunc";

export default class DemoProps extends Component {
  // Props là gì?
  // Props là viết tắt của propperties là 1 khái niệm trong react
  // Props là 1 đối tượng lưu trữ các giá trị của các thuộc tính
  // Props dùng để truyền dữ liệu từ component cha xuống component con
  render() {
    const title = "Hello world";
    return (
      <div>
        <CompChill companyName={"Rikkei Academy"} titleProps={title}>
          Xin chào mọi người !!!
        </CompChill>

        {/* <CompChillFunc companyName={"Rikkei Academy"} /> */}
      </div>
    );
  }
}
