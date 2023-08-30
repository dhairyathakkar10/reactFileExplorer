import { configureStore } from "@reduxjs/toolkit";
import fileExplorerSlice from "./fileExplorerSlice";

export const store = configureStore({
  reducer: {
    fileExplorer: fileExplorerSlice,
  },
});
