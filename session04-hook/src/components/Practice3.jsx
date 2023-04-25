import React, { useState } from "react";

function Practice3() {
  const [data, setData] = useState([
    { id: 1, name: "Nguyen Van A", age: 18 },
    { id: 2, name: "Nguyen Van B", age: 19 },
    { id: 3, name: "Nguyen Van C", age: 20 },
    { id: 4, name: "Nguyen Van D", age: 21 },
  ]);
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterData = data.filter(
    (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  return (
    <div>
      <h3>Tìm kiếm người dùng</h3>
      <input type='text' value={filter} onChange={handleFilter} />

      {/* Hiển thị giá trị tìm kiếm cho người dùng */}

      {handleFilterData.map((e, i) => {
        return (
          <div key={i}>
            {e.id} - {e.name} - {e.age}
          </div>
        );
      })}

      {/* Hiển thị ra cho người bằng table */}
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Practice3;
