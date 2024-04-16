import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "../features/navigationSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    search: searchReducer,
  },
});
