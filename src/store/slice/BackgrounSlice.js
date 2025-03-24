import { createSlice } from "@reduxjs/toolkit";
const BackgrounSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    url: "backgroundImage",
  },
  reducers: {
    setBackgroundUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setBackgroundUrl } = BackgrounSlice.actions;
export default BackgrounSlice.reducer;
