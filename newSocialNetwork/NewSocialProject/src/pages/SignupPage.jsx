import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username.trim() === "") {
      alert("Please enter a username!");
      return;
    }
    alert(`Account created for ${username}!`);
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSignUp} style={styles.button}>
        Sign Up
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    width: "80%",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
  },
};

export default SignUpPage;
