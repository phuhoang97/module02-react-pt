// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     console.log("0. constructor đã được chạy");
//     this.state = {
//       name: "Nguyen Van A",
//     };
//     // this.setState => Không được sử dụng this.setState
//   }
//   // componentWillMount() Không nên sử dụng để cập nhật lại state trong phương thức này
//   componentWillMount() {
//     console.log("1. componentWillMount đã được chạy");
//   }
//   // componentDidMount nên cập nhật state or props trong đây vì đã được render lần đầu và được thêm vào DOM
//   componentDidMount() {
//     console.log("2. componentDidMount đã được chạy");
//   }
//   // thứ tự chạy sẽ là 0 1 3 2 trong updating
//   render() {
//     console.log("3. Render đã được chạy");
//     return (
//       <>
//         <div>{this.state.name}</div>
//         <button onClick={() => this.setState({ name: "Nguyen Van C" })}>
//           Click me !!!
//         </button>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import FormWithOneInput from "./components/FormWithOneInput";
import FormWithSecOpti from "./components/FormWithSecOpti";
import FormWithMult from "./components/FormWithMult";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Xử lý form với 1 input</h2>
        <FormWithOneInput />
        <h2>Xử lý form với section và option</h2>
        <FormWithSecOpti />
        <h2>Xử lý form với nhiều input</h2>
        <FormWithMult />
      </div>
    );
  }
}
