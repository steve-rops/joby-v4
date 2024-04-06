import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "../features/header/Query/QuerySlice";
import categorySlice from "../features/header/categories/categorySlice";
import uiSlice from "../components/ui/uiSlice";

const store = configureStore({
  reducer: {
    query: QuerySlice,
    category: categorySlice,
    ui: uiSlice,
  },
});

export default store;
