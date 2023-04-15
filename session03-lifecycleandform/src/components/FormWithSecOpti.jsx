import React, { Component } from "react";

export default class FormWithSecOpti extends Component {
  // Khởi tạo state
  constructor() {
    super();
    this.state = {
      course: "ReactJS",
    };
  }

  handleChange = (e) => {
    this.setState({
      course: e.target.value, // html // css
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Khóa học bạn chọn là: " + this.state.course); // HTML
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Chọn khóa học:</label>

          <select onChange={this.handleChange}>
            <option value='ReactJS'>ReactJS</option>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='JS'>JS</option>
          </select>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    );
  }
}
