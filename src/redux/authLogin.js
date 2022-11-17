import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const logAction = logSlice.actions;

export default logSlice;
