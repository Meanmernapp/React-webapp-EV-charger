import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { chargingStation, createBatteryAvailable, deleteBatteryAvailables, getBatteryAvailables, getBatteryPercentage, getChargingStatus, getConnectorStatus, getFeedbacks, getHistroyUser, getPliotUser, updateBatteryAvailable, updateChargingStatus, updatePliotUser } from "../../constants/chargingStation";
localStorage.setItem("u", 0)
const initialState = {
    getPliotUser: [],
    getHistroyUser:[],
    updatePliotUser: {},
    getChargingStatus:[],
    getBatteryAvailables:[],
    getFeedbacks:[],
    deleteBatteryAvailables:{},
    createBatteryAvailable:{},
    updateChargingStatus:{},
    getBatteryPercentage:{},
    getConnectorStatus:{},
    updateBatteryAvailable:{}
};

const ChargingStationSlice = createSlice({
    name: chargingStation,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(`${chargingStation}/${getPliotUser}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status < 300) {
                    state.getPliotUser = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${getHistroyUser}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status < 300) {
                    state.getHistroyUser = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${updatePliotUser}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.updatePliotUser = data
                    toast.success("Updated Successfully")
                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.errors[0]);
                }
            })
            .addCase(`${chargingStation}/${getChargingStatus}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.getChargingStatus = data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${updateChargingStatus}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.updateChargingStatus = data
                    toast.success("charging Status Updated")

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${getBatteryAvailables}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.getBatteryAvailables = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${createBatteryAvailable}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.createBatteryAvailable = data
                    toast.success("Added Successfully")

                } else if (status >= 400 && status <= 500) {
                    // toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${getBatteryPercentage}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    
                    state.getBatteryPercentage = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${getFeedbacks}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.getFeedbacks = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${deleteBatteryAvailables}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.deleteBatteryAvailables = data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${getConnectorStatus}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
                if (status >= 200 && status <= 300) {
                    state.getConnectorStatus = data?.data

                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
            .addCase(`${chargingStation}/${updateBatteryAvailable}/fulfilled`, (state, action) => {
                const { data, status } = action.payload || {};
               
                if (status >= 200 && status <= 300) {
                    const u = localStorage.getItem("u") + 1
                    localStorage.setItem("u", u)
                    state.updateBatteryAvailable = u
                    toast.success("updated Successfully")
                
                } else if (status >= 400 && status <= 500) {
                    toast.error(data?.message);
                }
            })
    },
});

export const { } = ChargingStationSlice.actions;
export default ChargingStationSlice.reducer;
