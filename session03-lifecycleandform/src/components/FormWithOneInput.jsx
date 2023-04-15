import React, { Component } from "react";

export default class FormWithOneInput extends Component {
  // Khởi tạo state
  constructor() {
    super();
    this.state = {
      studentName: "",
    };
  }

  handleSubmit = () => {
    alert("Tên học viên là: " + this.state.studentName);
  };

  handleChange = (e) => {
    this.setState({
      studentName: e.target.value,
    });
    console.log("giá trị khi người dùng nhập ", this.state.studentName);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Student Name: </label>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.studentName}
        />
        <input type='submit' value='submit' />
      </form>
    );
  }
}
