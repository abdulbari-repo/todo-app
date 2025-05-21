import React from "react";
import "./TodoList.css";
import Trash from "../../assets/Trash.png";
import Edit from "../../assets/Vector.png";
import Delete from "../../assets/vector-10.png";
import Plus from "../../assets/plus.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TodoList = () => {
  const navigate = useNavigate();

  const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    navigate(0);
  };

  const handleComplete = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    navigate(0);
  };

  return (
    <>
      <Navbar />
      <Footer />
      <div className="todo-list">
        {taskList.length > 0 ? (
          [...taskList]
            .sort((a, b) => b.id - a.id)
            .map((task) => (
              <div
                className="toDoList"
                key={task.id}
                style={{
                  boxShadow: task.completed
                    ? "0 0 10px rgb(6, 235, 59)"
                    : "0 0 10px rgb(205, 115, 204)",
                }}
              >
                <div className="toDoList-header">
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
                <div className="toDoList-body">
                  {task.completed ? (
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(task.id);
                      }}
                    >
                      <img src={Trash} alt="Delete Task" />
                    </Link>
                  ) : (
                    <>
                      <Link to={`/edit-task?id=${task.id}`}>
                        <img src={Delete} alt="Edit Task" />
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(task.id);
                        }}
                      >
                        <img src={Trash} alt="Delete Task" />
                      </Link>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleComplete(task.id);
                        }}
                      >
                        <img src={Edit} alt="Complete Task" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))
        ) : (
          <p className="paragraph">No tasks available.</p>
        )}
        <div className="addList">
          <Link to="/add-task">
            <img src={Plus} alt="Add Task" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoList;
