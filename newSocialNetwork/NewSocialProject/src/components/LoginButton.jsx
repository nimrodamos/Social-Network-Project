import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../store/userSlice";

const LoginButton = () => {
  const [inputName, setInputName] = useState(""); // For the user's input
  const userName = useSelector((state) => state.user.name); // Get the username from Redux state
  const dispatch = useDispatch(); // To dispatch Redux actions

  const handleLogin = () => {
    if (inputName.trim() === "") {
      alert("Please enter a valid name!");
      return;
    }
    dispatch(logIn(inputName)); // Dispatch the logIn action
    setInputName(""); // Clear the input field
  };

  const handleLogout = () => {
    dispatch(logOut()); // Dispatch the logOut action to reset the username
  };

  return (
    <div>
      {userName ? (
        // Show "Welcome" message and Log Out button if user is logged in
        <>
          <p>Welcome, {userName}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        // Show input and Log In button if user is not logged in
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </div>
  );
};

export default LoginButton;
