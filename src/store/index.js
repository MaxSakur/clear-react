import categoryReducer from "./reducers/categoryReducer";

import { configureStore, createStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    categoryList: categoryReducer,
  },
});