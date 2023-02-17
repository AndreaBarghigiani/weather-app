import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer, addCity, currentCity } from "./slices/cities";

// Actions

const store = configureStore({
  reducer: {
    currentCity,
    cities: citiesReducer,
  },
});

export { store, addCity, currentCity };
