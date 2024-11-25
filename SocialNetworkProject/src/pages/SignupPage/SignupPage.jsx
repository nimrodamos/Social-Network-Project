import React, { useState } from "react";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // Managing form states and messages
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Temporary mock user data for testing
  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    email: "test@example.com",
    password: "123456",
  };

  const navigate = useNavigate();

  // Function to handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    // Validate email and password against mock data
    if (
      email === mockUser.email &&
      password === mockUser.password &&
      firstName === mockUser.firstName &&
      lastName === mockUser.lastName
    ) {
      setMessage(`Signup successful! Welcome, ${mockUser.firstName}`);
      setIsError(false);
      navigate("/login");
    } else {
      setMessage("Signup failed: Invalid details. Please try again.");
      setIsError(true);
    }

    /*
    When you have a real server, replace the mock data validation with this:

    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      setMessage(`Signup successful! Welcome, ${response.data.firstName}`);
    } catch (error) {
      setMessage("Error: Unable to sign up. Please try again.");
      console.error(error);
    }
    */
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
      {message && (
        <p className={`signup-message ${isError ? "error-message" : ""}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SignupPage;
