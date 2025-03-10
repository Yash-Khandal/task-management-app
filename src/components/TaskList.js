import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => (
  <div className="task-list">
    {tasks.map((task) => (
      <Task key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    ))}
  </div>
);

export default TaskList;
