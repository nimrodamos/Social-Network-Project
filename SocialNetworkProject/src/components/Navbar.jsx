import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import newLOGO from "../assets/newLOGO.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user session
    navigate("/"); // Redirect to WelcomePage
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">
          <img
            src={newLOGO}
            alt="SocialNetwork Logo"
            className="navbar-logo-img"
          />
        </Link>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>
      <div className="navbar-right">
        <Link to="/profile" className="navbar-button">
          My Profile
        </Link>
        <button onClick={handleLogout} className="navbar-button logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
