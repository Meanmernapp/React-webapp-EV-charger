import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: null,
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { setSidebar } = UiSlice.actions;
export default UiSlice.reducer;
