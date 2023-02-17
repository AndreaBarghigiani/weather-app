import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Turin",
    position: {
      lat: 45.116177,
      lon: 7.742615,
    },
    current: false,
  },
  {
    name: "London",
    position: {
      lat: 51.509865,
      lon: -0.118092,
    },
    current: false,
  },
  {
    name: "Rome",
    position: {
      lat: 41.902782,
      lon: 12.496366,
    },
    current: false,
  },
  {
    name: "San Francisco",
    position: {
      lat: 37.773972,
      lon: -122.431297,
    },
    current: true,
  },
];

const additionalCities = [
  {
    name: "Dubai",
    position: {
      lat: 25.276987,
      lon: 55.296249,
    },
    current: false,
  },
  {
    name: "Paris",
    position: {
      lat: 48.864716,
      lon: 2.349014,
    },
    current: false,
  },
  {
    name: "Lisbon",
    position: {
      lat: 38.736946,
      lon: -9.142685,
    },
    current: false,
  },
  {
    name: "San Francisco",
    position: {
      lat: 37.773972,
      lon: -122.431297,
    },
    current: false,
  },
];

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state) => state.push(additionalCities.shift()),
    setCurrentCity: (state, action) =>
      state.reduce((acc, cur) => {
        cur.current = cur.name === action.payload.name;
        acc.push(cur);
      }, []),
    currentCity: (state) => state.filter((city) => city.current),
  },
});

export const { addCity, currentCity } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
