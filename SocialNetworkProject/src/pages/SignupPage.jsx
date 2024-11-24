import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css"; // ייבוא קובץ ה-CSS

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      setMessage(`Signup successful! Welcome, ${response.data.firstName}`);
    } catch (error) {
      setMessage("Error: Unable to sign up. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      {message && <p className="signup-message">{message}</p>}
    </div>
  );
};

export default SignupPage;
