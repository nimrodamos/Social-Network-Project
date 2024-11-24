import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Social Network</h1>
      <p className="home-description">
        Connect with friends and share your moments.
      </p>
      <div>
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
