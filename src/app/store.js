import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../features/weatherSlice";
import searchReducer from "../features/searchSlice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
    search: searchReducer,
  },
});
