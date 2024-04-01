import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "../features/header/Query/QuerySlice";
import categorySlice from "../features/header/categories/categorySlice";

const store = configureStore({
  reducer: {
    query: QuerySlice,
    category: categorySlice,
  },
});

export default store;
