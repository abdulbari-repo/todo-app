import React from "react";
import "./CompleteTask.css";
import backPageIcon from "../../assets/Turn-BackPage-Button.png";

const CompleteTask = () => {
  const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  const completedTasks = taskList.filter((task) => task.completed);

  return (
    <>
      <div className="completeTask">
        <div className="header">
          <a href="/">
            <img src={backPageIcon} alt="Back" />
          </a>
          <h1>Completed Task</h1>
        </div>
        <div className="taskList">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <div className="taskCard" key={task.id}>
                <h4>
                  {task.title.length > 3
                    ? task.title.slice(0, 10) + "..."
                    : task.title}
                </h4>
                <p>
                  {task.detail.length > 5
                    ? task.detail.slice(0, 94) + "..."
                    : task.detail}
                </p>
              </div>
            ))
          ) : (
            <p className="paragraph">No completed tasks</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CompleteTask;
