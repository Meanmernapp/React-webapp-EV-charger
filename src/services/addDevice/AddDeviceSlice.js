import { createSlice } from "@reduxjs/toolkit";
import { CreateDevice, GetDevice } from "./AddDeviceApi";
import { device } from "../../constants/addDevice";

const initialState = {
  deviceData: [],
  loading: false,
  error: null,
};

const AddDevice = createSlice({
  name: device,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateDevice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.clustersData = [...state.deviceData, action.payload];
      })
      .addCase(CreateDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(GetDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.deviceData = [action.payload];
      });
  },
});

export default AddDevice.reducer;
