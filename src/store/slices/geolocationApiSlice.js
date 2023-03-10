import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const geolocationSlice = createApi({
  reducerPath: "geolocation",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/geo/1.0/`,
  }),
  endpoints: (builder) => ({
    findCity: builder.query({
      query: (city) => {
        return {
          url: "direct",
          params: {
            q: city,
            appid: import.meta.env.VITE_WEATHER_KEY,
            limit: 5,
          },
        };
      },
    }),
    findCityCoord: builder.query({
      query: ({ lat, lon }) => {
        return {
          url: "reverse",
          params: {
            lat,
            lon,
            appid: import.meta.env.VITE_WEATHER_KEY,
          },
        };
      },
    }),
  }),
});

export const { useFindCityQuery, useFindCityCoordQuery } = geolocationSlice;
