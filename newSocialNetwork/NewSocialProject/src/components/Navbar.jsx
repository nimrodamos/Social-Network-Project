import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>My Social Media</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <Link to="">
          {" "}
          <li>Login</li>
        </Link>

        <li>Signup</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
  },
  title: {
    fontSize: "1.5rem",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

export default NavBar;
