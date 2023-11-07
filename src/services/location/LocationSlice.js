// LocationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateContinent,
  CreateCountry,
  CreateCluster,
  GetCountries,
  GetContinents,
  GetLocations,
  GetCluster,
} from "./LocationApi"; // Import your API functions
import { location } from "../../constants/location";

const initialState = {
  loading: false,
  error: null,
  continentData: [],
  countryData: [],
  clusterData: [],
  locationData:[]
};

const LocationSlice = createSlice({
  name: location,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateContinent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateContinent.fulfilled, (state, action) => {
        state.loading = false;
        state.continentData = [...state.continentData, action.payload];
      })
      .addCase(CreateContinent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(CreateCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateCountry.fulfilled, (state, action) => {
        state.countryData = [...state.countryData, action.payload];
      })
      .addCase(CreateCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(CreateCluster.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateCluster.fulfilled, (state, action) => {
        state.loading = false;
        state.clusterData = [...state.clusterData, action.payload];
      })
      .addCase(CreateCluster.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(GetCluster.fulfilled, (state, action) => {
        state.loading = false;
        state.clusterData = [action.payload];
      })
      .addCase(GetCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countryData = [action.payload];
      })
      .addCase(GetLocations.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false;
        state.locationData = [action.payload];
      })
      .addCase(GetContinents.fulfilled, (state, action) => {
        state.loading = false;
        state.continentData = [action.payload];
      });
  },
});

export const {} = LocationSlice.actions;
export default LocationSlice.reducer;
