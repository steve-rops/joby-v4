import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "gb",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings(state, action) {
      state.country = action.payload;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
