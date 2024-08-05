import { configureStore } from "@reduxjs/toolkit";
import restart from "./restartSlice";

const store = configureStore({
  reducer: {
    restart: restart,
  },
});

export default store;
