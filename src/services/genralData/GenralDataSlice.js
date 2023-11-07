// GENERAL DATA.js
import { createSlice } from "@reduxjs/toolkit";

const GenralData = createSlice({
  name: "data",
  initialState: {
    data: null,
    count: 1,
    load: null,
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
    insertLoad: (state, action) => {
      state.load = action.payload;
    },
    updateCount: (state, action) => {
      state.count = state.count + action.payload;
    },
    resetCount: (state) => {
      state.count = 1;
    },
    resetLoad: (state) => {
      state.count = null;
    },
  },
});
export const getLoad = (state) => state.GenralData?.load;
export const getCount = (state) => state.GenralData?.count;
export const { updateData, updateCount, insertLoad, resetCount, resetLoad } =
  GenralData.actions;
export const selectData = (state) => state.GenralData.data;
export default GenralData.reducer;
