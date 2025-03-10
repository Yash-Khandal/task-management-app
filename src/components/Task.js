import React from "react";

const Task = ({ task, toggleTaskCompletion, deleteTask }) => (
  <div className={`task ${task.completed ? "completed" : ""}`}>
    <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </div>
);

export default Task;
