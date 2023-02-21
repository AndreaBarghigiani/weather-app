import { configureStore } from "@reduxjs/toolkit";
import {
  citiesReducer,
  addCity,
  addCustomCity,
  setCurrentCity,
  addRandomCity,
} from "./slices/cities";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { weatherSlice } from "./slices/weatherApiSlice";
import { geolocationSlice } from "./slices/geolocationApiSlice";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    [weatherSlice.reducerPath]: weatherSlice.reducer,
    [geolocationSlice.reducerPath]: geolocationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherSlice.middleware)
      .concat(geolocationSlice.middleware),
});

export { store, addCity, addCustomCity, setCurrentCity, addRandomCity };
export {
  useFindCityQuery,
  useFindCityCoordQuery,
} from "./slices/geolocationApiSlice";
export { useGetWeatherQuery } from "./slices/weatherApiSlice";
