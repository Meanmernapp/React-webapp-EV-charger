import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/Axios";
import {
  createDevice,
  createDeviceEndPoint,
  device,
  getDevice,
  getDeviceEndPoint,
} from "../../constants/addDevice";

export const CreateDevice = createAsyncThunk(
  `${device}/${createDevice}`,
  async (params, { dispatch }) => {
    try {
      console.log(params.addDevice);
      const response = await apiInstance.post(
        createDeviceEndPoint,
        params.addDevice
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetDevice = createAsyncThunk(
  `${device}/${getDevice}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getDeviceEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
