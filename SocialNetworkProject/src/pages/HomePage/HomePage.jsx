import React from "react";
import Navbar from "../../components/Navbar";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="homepage-content">
        <h1 className="homepage-heading">Welcome to MySocialApp</h1>
        <p className="homepage-description">
          Connect with friends and share your moments.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
