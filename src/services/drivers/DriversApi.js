/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/Axios";
import {
  driver,
  drivers,
  getDriversEndPoint,
  getAvailableDriversEndPoint,
  updateOperationsEndPoint,
  getPresent,
  getAll,
  api,
} from "../../constants/drivers";

export const GetAllDrivers = createAsyncThunk(
  `${driver}/${getAll}`,
  async (cluster_id, { dispatch }) => {
    try {
      const response = await apiInstance.get(getDriversEndPoint(cluster_id));
      return response?.data?.data[0];
    } catch (error) {
      throw error;
    }
  }
);

export const GetAllAvailableDriver = createAsyncThunk(
  `${driver}/${getPresent}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getAvailableDriversEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const UpdateOperations = createAsyncThunk(
  `${driver}/${drivers}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.put(updateOperationsEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
