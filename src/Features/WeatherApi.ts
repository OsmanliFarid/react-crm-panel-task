import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL_KEY = "53123f2f232fdc830f13c2068acda716";

export const WeatherApi = createApi({
  reducerPath: "WeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (SearchText) =>
        `weather?q=${SearchText}&appid=${API_URL_KEY}&units=metric`,
    }),
  }),
});

export const { useGetUsersQuery } = WeatherApi;
