import React, { useState } from "react";

function Practice2() {
  const [tasks, setTask] = useState(["Doing to homework"]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    setTask([...tasks, newTask]);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <input type='text' value={newTask} onChange={handleChange} />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
}

export default Practice2;
