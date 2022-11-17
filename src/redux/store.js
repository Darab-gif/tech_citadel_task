import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./authLogin";
import { subjectReducer } from "./subjectSlice";

const store = configureStore({
  reducer: {
    log: logSlice.reducer,
    sub: subjectReducer,
  },
});

export default store;
