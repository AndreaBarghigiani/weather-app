import { createSlice, nanoid } from "@reduxjs/toolkit";

// Data
import initialCities from "../../data/initialCities.json";
import additionalCities from "../../data/additionalCities.json";

const initialState = initialCities.map((city) => {
  city.id = nanoid();
  return city;
});

const additionalState = additionalCities.map((city) => {
  city.id = nanoid();
  return city;
});

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state) => state.push(additionalState.shift()),
    addCustomCity: (state, action) => {
      const city = {
        id: nanoid(),
        current: true,
        ...action.payload,
      };
      return [...state.map((city) => ({ ...city, current: false })), city];
    },
    setCurrentCity: (state, action) =>
      state.reduce((acc, cur) => {
        cur.current = cur.name === action.payload.name;
        acc.push(cur);

        return acc;
      }, []),
    currentCity: (state) => state.filter((city) => city.current),
  },
});

export const { addCity, currentCity, addCustomCity } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
