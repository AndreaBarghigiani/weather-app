import { createSlice, nanoid } from "@reduxjs/toolkit";

// Data
import initialCities from "../../assets/data/initialCities.json";
import additionalCities from "../../assets/data/additionalCities.json";

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
      const alreadyPresent = (arr, obj) =>
        arr.some((city) => city.lat === obj.lat && city.lon === obj.lon);

      const city = {
        id: nanoid(),
        current: true,
        ...action.payload,
      };

      if (alreadyPresent(state, city)) {
        return [
          ...state.map((item) =>
            item.lat === city.lat && item.lon === city.lon
              ? { ...item, current: true }
              : { ...item, current: false }
          ),
        ];
      } else {
        return [...state.map((city) => ({ ...city, current: false })), city];
      }
    },
    setCurrentCity: (state, action) => [
      ...state.map((item) =>
        item.id === action.payload.id
          ? { ...item, current: true }
          : { ...item, current: false }
      ),
    ],
    addRandomCity: (state) => {
      return [additionalCities.pop(), ...state];
    },
  },
});

export const { addCity, addCustomCity, setCurrentCity, addRandomCity } =
  citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
