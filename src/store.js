import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./store/slice/TestSlice"
import backgroundReducer from "./store/slice/BackgrounSlice"; 

const store = configureStore({
  reducer: {
    task: taskReducer,
    backgroundImage: backgroundReducer, 
  },
});

export default store;
