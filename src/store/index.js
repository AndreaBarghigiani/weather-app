import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer, addCity, currentCity } from "./slices/cities";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { weatherSlice } from "./slices/weatherApiSlice";

const store = configureStore({
  reducer: {
    currentCity,
    cities: citiesReducer,
    [weatherSlice.reducerPath]: weatherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherSlice.middleware),
});

export { store, addCity, currentCity };
