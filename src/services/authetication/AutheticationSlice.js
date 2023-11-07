import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authetication, getUserProfile, login, newPassword, resetPassword } from "../../constants/authetication";
import cryptoJs from 'crypto-js'


const initialState = {
  user: {},
  resetPassword:{},
  newPassword:{}
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
          const accessToken = cryptoJs.AES.encrypt(data?.data?.token, import.meta.env.VITE_SECURE_KEY)
          sessionStorage.setItem("token",accessToken)
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${authetication}/${resetPassword}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.resetPassword = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${authetication}/${newPassword}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.newPassword = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
      .addCase(`${authetication}/${getUserProfile}/fulfilled`, (state, action) => {
        const { data, status } = action.payload || {};
        if (status >= 200 && status < 300) {
          state.user = data?.data;
        } else if (status >= 400 && status < 500) {
          // toast.error(data?.message);
        }
      })
   
  },
});

export const { logOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
