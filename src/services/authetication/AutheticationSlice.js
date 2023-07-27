import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authetication, login } from "../../constants/authetication";


const initialState = {
  user: {},
};

const authenticationSlice = createSlice({
  name:authetication,
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = {};
      sessionStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(`${authetication}/${login}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.user = data?.data;
          sessionStorage.setItem("token",data?.data?.token)
        } else if (status >= 400 && status < 500) {
          toast.error(data?.message);
        }
      });
   
  },
});

export const { logOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
