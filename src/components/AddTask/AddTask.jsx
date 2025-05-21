import React, { useState } from "react";
import "./AddTask.css";
import backPageIcon from "../../assets/Turn-BackPage-Button.png";
import { Link, useNavigate } from "react-router-dom";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [taskList, setTaskList] = useState([]);

  const navigate = useNavigate();

  const handleTask = (newTask) => {
    const existingTasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const updatedTasks = [ ...existingTasks , newTask];
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle && taskDetail) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        detail: taskDetail,
        completed: false,
      };

      setTaskList([...taskList, newTask]);
      setTaskTitle("");
      setTaskDetail("");
      handleTask(newTask);
      navigate("/");

    }
  };

  return (
    <>
      <div className="addTask">
        <div className="addTask-header">
          <Link to="/">
            <img src={backPageIcon} alt="Back" />
          </Link>
          <h1>Add Task</h1>
        </div>
        <div>
          <form className="addTask-form">
          <input
            type="text"
            placeholder="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          required/>
          <textarea
            placeholder="Detail"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          required></textarea>
            <button type="submit" onClick={handleSubmit}>ADD</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
