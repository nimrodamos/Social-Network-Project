import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: localStorage.getItem("userName") || null, // Retrieve the username if saved
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("userName", action.payload); // Save the name to localStorage
    },
    logOut: (state) => {
      state.name = null;
      localStorage.removeItem("userName"); // Remove the name from localStorage
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
