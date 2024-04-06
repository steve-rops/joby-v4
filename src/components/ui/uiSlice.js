import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerHeight: 212,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
  },
});

export const { updateHeaderHeight } = uiSlice.actions;

export default uiSlice.reducer;
