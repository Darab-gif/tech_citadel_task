import { createSlice } from "@reduxjs/toolkit";
import { data } from "../utils/data";

const initialState = data;

console.log(initialState);
const subjectSlice = createSlice({
  name: "sub",
  initialState,
  reducers: {},
});

export const subjectReducer = subjectSlice.reducer;
