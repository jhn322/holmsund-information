import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../features/weatherSlice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
