// LocationSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { location } from "../../constants/location";
import {
  GetAllAvailableDriver,
  GetAllDrivers,
  UpdateOperations,
} from "./DriversApi";

const initialState = {
  loading: false,
  error: null,
  drivers: [],
  available: [],
};

const DriversSlice = createSlice({
  name: location,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.drivers = [action.payload];
      })
      .addCase(GetAllAvailableDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.available = [action.payload];
      })
      .addCase(UpdateOperations.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.operations = [action.payload];
      });
  },
});

export const {} = DriversSlice.actions;
export default DriversSlice.reducer;
