import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherSlice = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/3.0/`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => {
        const { lat, lon } = city;
        return {
          url: "onecall",
          params: {
            lat,
            lon,
            appid: import.meta.env.VITE_WEATHER_KEY,
            units: "metric",
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherSlice;
