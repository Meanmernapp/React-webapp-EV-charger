/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/Axios";
import {
  operation,
  operations,
  createOperationsEndPoint,
  api,
  getOperationsEndPoint,
} from "../../constants/drivers";

export const GetOperations = createAsyncThunk(
  `${api}/${operations}`,
  async (_, { dispatch }) => {
    try {
        console.log('first')
      const response = await apiInstance.get(getOperationsEndPoint);
      console.log(response)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const CreateOperaions = createAsyncThunk(
  `${operation}/${operations}`,
  async (params, { dispatch }) => {
    try {
      const response = await apiInstance.post(createOperationsEndPoint, params);
      console.log(params)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
