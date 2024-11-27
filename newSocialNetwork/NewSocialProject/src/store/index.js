import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer to manage user state
  },
});

export default store;
