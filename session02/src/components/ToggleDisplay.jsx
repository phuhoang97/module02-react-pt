import React, { Component } from "react";

export default class ToggleDisplay extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
    };

    console.log("Component", this);
    this.handleShow = this.handleShow.bind(this);
  }

  //   handleShow = () => {
  //     this.setState({ displayBio: !this.state.displayBio });
  //   };

  handleShow() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h4>Chào mừng đến với Rikkei Academy</h4>
        {/* Sử dụng toán tử 3 ngôi */}
        {this.state.displayBio ? (
          <div>
            <p>Chúc các bạn học tập tốt</p>
            <button onClick={this.handleShow}>Show less</button>
          </div>
        ) : (
          <button onClick={this.handleShow}>Read more</button>
        )}

        {/* 
        if(this.state.displayBio){
            <div>
                <p>Chúc các bạn học tập tốt</p>
                <button onClick={this.handleShow}>Show less</button>
            </div>
        } else{
            <button onClick={this.handleShow}>Read more</button>
         }
        */}
      </div>
    );
  }
}
