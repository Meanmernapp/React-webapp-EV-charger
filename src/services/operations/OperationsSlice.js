// OperationsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { CreateOperaions, GetOperations } from "./OperationsApi";
import { operation } from "../../constants/drivers";

const initialState = {
  loading: false,
  error: null,
  operations: [],
  allOperations: [],
};

const OperationsSlice = createSlice({
  name: operation,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetOperations.fulfilled, (state, action) => {
      state.loading = false;
      state.allOperations = [action.payload];
    });
    builder.addCase(CreateOperaions.fulfilled, (state, action) => {
      state.loading = false;
      state.operations = [...state.operations, action.payload];
    });
  },
});

export const {} = OperationsSlice.actions;
export default OperationsSlice.reducer;
