import { createSlice } from "@reduxjs/toolkit";
import BackgroundImg from "../image/BackgroundImg.jpg";

const BackgrounSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    url: BackgroundImg
  },
  reducers: {
    changeBackground: (state, action) => {
      console.log(action.payload);
      state.url = action.payload;
    },
  },
});

export const { changeBackground } = BackgrounSlice.actions;
export default BackgrounSlice.reducer;
