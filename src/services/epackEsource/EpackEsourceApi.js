/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/Axios";
import {
  all,
  api,
  epack,
  esource,
  getAllEpacks,
  getAllEsource,
  getEsource,
} from "../../constants/epackEsource";

export const GetAllEpacks = createAsyncThunk(
  `${api}/${epack}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getAllEpacks);
      console.log(response);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const GetEsource = createAsyncThunk(
  `${api}/${esource}`,
  async (id, { dispatch }) => {
    try {
      const response = await apiInstance.get(getEsource, id);
      console.log(id);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetAllEsource = createAsyncThunk(
  `${api}/${all}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getAllEsource);
      console.log(response)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
