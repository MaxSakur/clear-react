import categoryReducer from "./reducers/categoryReducer";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    categories: categoryReducer,
  },
});
