import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "../features/header/Query/QuerySlice";

const store = configureStore({ reducer: { query: QuerySlice } });

export default store;
