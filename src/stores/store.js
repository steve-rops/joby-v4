import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "../features/header/Query/QuerySlice";
import categorySlice from "../features/header/categories/categorySlice";
import uiSlice from "../components/ui/uiSlice";
import settingsSlice from "../features/settings/settingsSlice";

const store = configureStore({
  reducer: {
    query: QuerySlice,
    category: categorySlice,
    ui: uiSlice,
    settings: settingsSlice,
  },
});

export default store;
