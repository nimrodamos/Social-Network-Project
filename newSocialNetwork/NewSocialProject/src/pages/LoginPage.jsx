import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginButton from "../components/LoginButton";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim() === "") {
      alert("Please enter your username!");
      return;
    }
    dispatch(LoginButton(username));
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h1>Log In</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Log In
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
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
  },
};

export default LoginPage;
