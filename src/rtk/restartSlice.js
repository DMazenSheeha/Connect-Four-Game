import { createSlice } from "@reduxjs/toolkit";

const restartSlice = createSlice({
  name: "restart",
  initialState: false,
  reducers: {
    doRestart: (state) => {
      return true;
    },
    makeItInitial: (state) => {
      return false;
    },
  },
});

export const { doRestart, makeItInitial } = restartSlice.actions;
export default restartSlice.reducer;
