import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = UserSlice.actions;
export default UserSlice.reducer;
