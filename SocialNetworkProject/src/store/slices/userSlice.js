import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.name = action.payload;
    },
    logOut: (state) => {
      state.name = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
