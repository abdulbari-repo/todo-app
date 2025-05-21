import React, { useState } from "react";
import "./EditTask.css";
import backPageIcon from "../../assets/Turn-BackPage-Button.png";
import { useLocation, useNavigate } from "react-router-dom";

const EditTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const taskId = new URLSearchParams(location.search).get("id");

  const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  const editTask = taskList.find((task) => task.id === parseInt(taskId));

  if (!editTask) {
    return <h2>Task not found</h2>;
  }

  const [title, setTitle] = useState(editTask.title);
  const [detail, setDetail] = useState(editTask.detail);

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTaskList = taskList.map((task) =>
      task.id === parseInt(taskId) ? { ...task, title, detail } : task
    );
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    navigate("/");
  };

  return (
    <div className="editTask">
      <div className="editTask-header">
        <a href="/">
          <img src={backPageIcon} alt="Back" />
        </a>
        <h1>Edit Task</h1>
      </div>
      <form className="editTask-form" onSubmit={handleEdit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>
        <div className="editTask-buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
