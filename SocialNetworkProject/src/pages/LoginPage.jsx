import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  // Managing form states and messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Temporary mock user data for testing
  const mockUser = {
    email: "test@example.com",
    password: "123456",
    firstName: "Test User",
  };

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password against mock data
    if (email === mockUser.email && password === mockUser.password) {
      setMessage(`Login successful! Welcome back, ${mockUser.firstName}`);
    } else {
      setMessage("Error: Invalid email or password. Please try again.");
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
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default LoginPage;
