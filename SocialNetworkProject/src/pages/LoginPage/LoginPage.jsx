import React, { useState } from "react";
import "./LoginPage.css";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const dummyUser = {
    email: "test@example.com",
    password: "123456",
    firstName: "Test User",
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      setMessage(`Login successful! Welcome back, ${dummyUser.firstName}`);
      setIsError(false);
      navigate("/home");
    } else {
      setMessage("Error: Invalid email or password. Please try again.");
      setIsError(true);
    }

    /*
    When you have a real server, replace the mock data validation with this:
    
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      setMessage(`Login successful! Welcome back, ${response.data.firstName}`);
    } catch (error) {
      setMessage("Error: Invalid email or password. Please try again.");
      console.error(error);
    }
    */
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {message && (
        <p className={`login-message ${isError ? "error-message" : ""}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoginPage;
