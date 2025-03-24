import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  searchInputValue: "",
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    addInnerTask: (state, action) => {
      const { id, innerTask } = action.payload;
      const parentTask = state.tasks.find((el) => el.id === id);
      if (parentTask) {
        if (!parentTask.innerTask) {
          parentTask.innerTask = [];
        }
        parentTask.innerTask.push({
          id: Date.now(),
          innerTask,
        });
      }
    },
    toggleInnerTask: (state, action) => {
      const { parentId, id, editingValue } = action.payload;
      const parentTask = state.tasks.find((el) => el.id === parentId);
      if (parentTask) {
        const innerTask = parentTask.innerTask.find((el) => el.id === id);
        if (innerTask) {
          innerTask.innerTask = editingValue;
        }
      }
    },
    filterTask: (state, action) => {
      state.searchInputValue = action.payload;
    },
    deleteInnerTask: (state, action) => {
      const { parentId, id } = action.payload;
      const parentTask = state.tasks.find((el) => el.id === parentId);
      if (parentTask) {
        parentTask.innerTask = parentTask.innerTask.filter(
          (el) => el.id !== id
        );
      }
    },
  },
});

export const {
  addTask,
  addInnerTask,
  toggleInnerTask,
  filterTask,
  deleteInnerTask,
} = TaskSlice.actions;
export default TaskSlice.reducer;
