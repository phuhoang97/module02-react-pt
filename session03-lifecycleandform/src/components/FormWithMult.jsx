import React, { Component } from "react";

export default class FormWithMult extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      age: "",
      course: "ReactJS",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    alert(
      "thông tin SV là: " +
        this.state.studentName +
        " " +
        this.state.age +
        " " +
        this.state.course
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên: </label>
          <input
            type='text'
            name='studentName'
            value={this.state.studentName}
            onChange={this.handleChange}
          />
          <br />

          <label>Tuổi: </label>
          <input
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />

          <label>
            Chọn khóa học:
            <select
              onChange={this.handleChange}
              name='course'
              value={this.state.value}
            >
              <option value='ReactJS'>ReactJS</option>
              <option value='HTML'>HTML</option>
              <option value='CSS'>CSS</option>
              <option value='JS'>JS</option>
            </select>
          </label>
          <br />

          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}
