import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "../features/header/Query/QuerySlice";
import categorySlice from "../features/header/categories/categorySlice";
import uiSlice from "../uiSlice";

const store = configureStore({
  reducer: {
    query: QuerySlice,
    category: categorySlice,
    height: uiSlice,
  },
});

export default store;
