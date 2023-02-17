import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "Turin",
//   position: {
//     lat: 45.116177,
//     lon: 7.742615,
//   },
// };
const initialState = {
  name: "San Francisco",
  position: {
    lat: 37.773972,
    lon: -122.431297,
  },
};

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState,
  reducers: {
    change: (_, action) => action.payload,
  },
});

export const { change } = currentCitySlice.actions;

export default currentCitySlice.reducer;
