import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  getHeaderHeight: 0,
};

const sharedSlice = createSlice({
  name:"shared",
  initialState,
  reducers: {
    GetHeaderHeight: (state,action) => {
      state.getHeaderHeight = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(`${authetication}/${login}/fulfilled`, (state, action) => {
//         const { data, status } = action.payload || {};
//         if (status >= 200 && status < 300) {
//           state.user = data?.data;
//           sessionStorage.setItem("token",data?.data?.token)
//         } else if (status >= 400 && status < 500) {
//           toast.error(data?.message);
//         }
//       });
   
//   },
});

export const { GetHeaderHeight } = sharedSlice.actions;
export default sharedSlice.reducer;
