import { createSlice } from "@reduxjs/toolkit";
import { approveJobDriver, driver, getDriverTask, updateConnectorBattery, vefiryEpackQrCode } from "../../constants/driver";

const initialState = {
  getDriver: [],
  verifyEpackQrCode:{},
  vefiryEpackQrCode:{},
  updateConnectorBattery:{}
};

const driverSlice = createSlice({
  name:driver,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(`${driver}/${getDriverTask}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.getDriver = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${driver}/${approveJobDriver}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.approveJobDriver = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${driver}/${vefiryEpackQrCode}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.verifyEpackQrCode = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${driver}/${updateConnectorBattery}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.updateConnectorBattery = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
  },
});

export const { logOut } = driverSlice.actions;
export default driverSlice.reducer;
