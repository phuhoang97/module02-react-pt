import React, { Component } from "react";

export default class EventBtn extends Component {
  handleClick01() {
    console.log("Click 01 was click");
  }

  handleClick02() {
    console.log("Click 02 was click");
  }

  handleClick03 = () => {
    console.log("Click 03 was click");
  };

  handleClick04 = () => {
    console.log("Click 04 was click");
  };

  handleClick05 = (message) => {
    console.log("Click 05 was click" + message);
  };

  handleClick06 = (message) => {
    console.log("Click 06 was click" + message);
  };

  render() {
    return (
      <div>
        <h4>Event</h4>
        <button onClick={this.handleClick01()}>Click 01</button>
        <button onClick={this.handleClick02}>Click 02</button>
        <button onClick={() => this.handleClick03()}>Click 03</button>
        <button onClick={() => this.handleClick04̣}>Click 04</button>
        <button onClick={() => this.handleClick05("Hello World")}>
          Click 05
        </button>
        <button onClick={this.handleClick06("Click 06 ")}>Click 06</button>
      </div>
    );
  }
}
