import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 0,
};

const uiSlice = createSlice({
  name: "height",
  initialState,
  reducers: {
    updateHeight(state, action) {
      state.height = action.payload;
    },
  },
});

export const { updateHeight } = uiSlice.actions;

export default uiSlice.reducer;
