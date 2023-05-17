import React, { useState } from "react";
import axios from "axios";

function DemoAxios() {
  // State dùng để lưu trữ dữ liệu
  const [dataAxios, setDataAxios] = useState([]);

  // Get Axios
  // Để lấy dữ liệu => dùng .then
  // Để bắt lỗi => .catch
  const handleGetAxios = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setDataAxios(res.data))
      .catch((err) => console.log(err));
  };

  // Post Axios

  const dataPeople = {
    id: 8,
    username: "Đức",
    phone: "0354565455",
    email: "duc@gmail.com",
  };

  const handlePostAxios = () => {
    axios
      .post("http://localhost:8000/users", dataPeople)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put axios
  // Put sẽ tạo bản ghi mới => Nên là cần phải truyền đầy đủ các trường lên

  const updateData = {
    username: "Duy",
    phone: "0354885455",
    email: "duy@gmail.com",
  };

  const handlePutAxios = () => {
    axios
      .put("http://localhost:8000/users/7", updateData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Patch Axios
  // Sẽ không tạo bản ghi mới
  const updatePatchData = {
    username: "Đông",
  };

  const handlePatchAxios = () => {
    axios
      .patch("http://localhost:8000/users/7", updatePatchData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Delete Axios
  const handleDeleteAxios = () => {
    axios
      .delete("http://localhost:8000/users/3")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Demo Axios</h2>
      <button onClick={handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePatchAxios}>Patch Axios</button>
      <button onClick={handleDeleteAxios}>Delete Axios</button>

      {/* Hiển thị dữ liệu người dùng */}
      <table border={1}>
        <tr>
          <th>STT</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {dataAxios.map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.username}</td>
            <td>{element.phone}</td>
            <td>{element.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DemoAxios;
