import React, { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Task Manager</h2>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>

      {/* Task Input Section */}
      <div className="task-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
