import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryID: null,
};

const categorySlice = createSlice({
  name: "cagegory",
  initialState,
  reducers: {
    updateActiveID(state, action) {
      state.activeCategoryID = action.payload;
    },
  },
});

export const { updateActiveID } = categorySlice.actions;

export default categorySlice.reducer;
