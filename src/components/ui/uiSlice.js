import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footerIsShown: true,
  toggleMapBtnIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showBtnHideFooter(state) {
      state.toggleMapBtnIsShown = true;
      state.footerIsShown = false;
    },
    showFooterHideBtn(state) {
      state.footerIsShown = true;
      state.toggleMapBtnIsShown = false;
    },
  },
});

export const { showBtnHideFooter, showFooterHideBtn } = uiSlice.actions;

export default uiSlice.reducer;
