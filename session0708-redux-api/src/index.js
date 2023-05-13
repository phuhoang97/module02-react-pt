import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Provider là cầu nối đưa redux vào các ứng dụng của react
import { reducer } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Tạo store cho ứng dụng
const store = createStore(reducer);

// Cung cấp store cho toàn bộ ứng dụng
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
