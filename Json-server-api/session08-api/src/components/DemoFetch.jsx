import React, { useState } from "react";

function DemoFetch() {
  const [show, setShow] = useState([]);

  // Get Fetch API
  const handleGetFetch = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log(err));
  };

  // Post Fetch API
  const people = {
    id: 6,
    username: "Diên Vũ",
    phone: "0354565655",
    email: "vu@gmail.com",
  };
  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(people),
    });
  };

  // Put Fetch API
  // Put sẽ cập nhật lại theo bản ghi mới

  const updateUser = {
    id: 4,
    username: "Duy Phương",
    phone: "035895655",
    email: "phuong@gmail.com",
  };
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/4", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });
  };

  // Patch Fetch API
  // Patch giống put dùng để update nhưng sẽ không tạo bản ghi mới mà chỉ sửa bản ghi cũ
  const updateUserPatch = {
    username: "Minh Cường",
  };
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/4", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUserPatch),
    });
  };

  // So sánh Put và Patch
  // Giống nhau: Đều được sử dụng để cập nhật lại dữ liệu
  // Khác nhau:
  //   + Put: tạo ra bản ghi mới => ghi đè bản ghi cũ
  //   + Patch: Không tạo ra bản ghi mới mà chỉ sửa bản ghi cũ

  // Delete Fetch API

  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/4", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h2>Demo Fetch API</h2>
      <button onClick={handleGetFetch}>Get Fetch API</button>
      <button onClick={handlePostFetch}>Post Fetch API</button>
      <button onClick={handlePutFetch}>Put Fetch API</button>
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>

      {/* Hiển thị dữ liệu người dùng */}
      <table border={1}>
        <tr>
          <th>STT</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {show.map((element, index) => (
          <tr>
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

export default DemoFetch;
