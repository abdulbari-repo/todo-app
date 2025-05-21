import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Auth.css";

const Auth = ({ onLogin }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate("/");
    } catch (error) {
      setErrorMessage("Please check your username and password.");
    }
  };

  return (
    <>
      <div className="auth-container color-scheme">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Welcome to Todo App</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="error">{errorMessage}</p>
          <p>
            Forgot your password? <a href="/reset-password">Reset it here</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Auth;
