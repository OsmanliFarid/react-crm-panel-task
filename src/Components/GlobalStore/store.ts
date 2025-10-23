import { configureStore } from "@reduxjs/toolkit";
import { WeatherApi } from "../../Features/WeatherApi";
import { WeatherDayApi } from "../../Features/WeatherDayApi";

export const store = configureStore({
  reducer: {
    [WeatherApi.reducerPath]: WeatherApi.reducer,
    [WeatherDayApi.reducerPath]: WeatherDayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(WeatherApi.middleware)
      .concat(WeatherDayApi.middleware),
});
