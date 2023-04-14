import React, { Component } from "react";

export default class CompChill extends Component {
  // State là một đối tượng chứa các thông tin được sử dụng để tạo và quản lý UI
  // State chỉ có thể được thay đổi trong component đó
  // Để khởi tạo state trong component sử dụng constructor
  constructor() {
    // Constructor dùng để khởi tạo state trong class component
    // Super dùng để gọi Constructor lớp cha
    super();
    // Khởi tạo state => để khởi tạo state chúng ta sử dụng this.state = {}
    this.state = {
      studentA: "Minh Thành",
      studentB: "Khánh Phan",
      address: {
        city: "Hà Nội",
      },
    };
  }

  // Để cập nhật lại state chúng ta sử dụng setState
  handleChangeStudent = () => {
    this.setState({
      studentB: "Mai Lê",
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Props</h2>
          <h4>{this.props.companyName}</h4>
          <h4>{this.props.titleProps}</h4>
          <h4>{this.props.children}</h4>
        </div>

        <div>
          <h2>State</h2>
          <div>{this.state.studentA} đẹp zai</div>
          <div>{this.state.studentB} cũng thế</div>
          <div>{this.state.address.city}</div>
          <button onClick={this.handleChangeStudent}>Click me !!!</button>
        </div>
      </div>
    );
  }
}
