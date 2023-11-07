// EpackEsourceSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { GetAllEpacks, GetAllEsource, GetEsource } from "./EpackEsourceApi";
import { epack } from "../../constants/epackEsource";

const initialState = {
  loading: false,
  error: null,
  epacks: [],
  esource: [],
  allEsource:[]
};

const EpackEsourceSlice = createSlice({
  name: epack,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllEpacks.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.epacks = [action.payload];
    });
    builder.addCase(GetEsource.fulfilled, (state, action) => {
      state.loading = false;
      state.esource = [action.payload];
    });
    builder.addCase(GetAllEsource.fulfilled, (state, action) => {
      state.loading = false;
      state.allEsource = [action.payload];
    });
  },
});

export const {} = EpackEsourceSlice.actions;
export default EpackEsourceSlice.reducer;
