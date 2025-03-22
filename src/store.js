import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/slice/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
