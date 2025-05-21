import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { Navigate, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import EditTask from "./components/EditTask/EditTask";
import Auth from "./components/Auth/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsAuthenticated(true);
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Auth onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-task"
        element={
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-task"
        element={
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/complete-task"
        element={
          <PrivateRoute>
            <CompleteTask />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
