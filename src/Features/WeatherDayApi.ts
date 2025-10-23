import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "53123f2f232fdc830f13c2068acda716";

export const WeatherDayApi = createApi({
  reducerPath: "WeatherDayApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: (builder) => ({
    WeatherDay: builder.query({
      query: (SearchText) =>
        `forecast?q=${SearchText}&appid=${API_KEY}&units=metric`,
    }),
  }),
});
export const { useWeatherDayQuery } = WeatherDayApi;
