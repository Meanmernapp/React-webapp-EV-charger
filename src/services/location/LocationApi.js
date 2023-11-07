import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/Axios";
import {
  continent,
  country,
  createCluster,
  createClusterEndPoint,
  createContinent,
  createContinentEndPoint,
  createCountry,
  createCountryEndPoint,
  getClusterEndPoint,
  getClusters,
  getContinentEndPoint,
  getCountryEndPoint,
  getLocationViewsEndPoint,
  location,
  pilot,
} from "../../constants/location";

export const CreateContinent = createAsyncThunk(
  `${pilot}/${createContinent}`,
  async (params, { dispatch, getState }) => {
    try {
      const response = await apiInstance.post(createContinentEndPoint, params);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const CreateCountry = createAsyncThunk(
  `${pilot}/${createCountry}`,
  async (params, { dispatch, getState }) => {
    try {
      const response = await apiInstance.post(createCountryEndPoint, params);
      console.log(response);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const CreateCluster = createAsyncThunk(
  `${pilot}/${createCluster}`,
  async (params, { dispatch, getState }) => {
    try {
      const response = await apiInstance.post(createClusterEndPoint, params);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetLocations = createAsyncThunk(
  `${pilot}/${location}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getLocationViewsEndPoint);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetCountries = createAsyncThunk(
  `${pilot}/${country}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getCountryEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetCluster = createAsyncThunk(
  `${pilot}/${getClusters}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getClusterEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const GetContinents = createAsyncThunk(
  `${pilot}/${continent}`,
  async (_, { dispatch }) => {
    try {
      const response = await apiInstance.get(getContinentEndPoint);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
