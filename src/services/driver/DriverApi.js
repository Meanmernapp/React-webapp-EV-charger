import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../config/Axios';
import { approveJobDriver, approveJobDriverEndPoint, driver, getDriverTask, getDriverTaskEndPoint, updateConnectorBattery, updateConnectorBatteryEndPoint, vefiryEpackQrCode, vefiryEpackQrCodeEndPoint } from "../../constants/driver";


// get driver task
export const GetDriverTask = createAsyncThunk(`${driver}/${getDriverTask}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.get(`${getDriverTaskEndPoint}`).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const ApproveJobDriver = createAsyncThunk(`${driver}/${approveJobDriver}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.get(`${approveJobDriverEndPoint}`).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const VefiryEpackQrCode = createAsyncThunk(`${driver}/${vefiryEpackQrCode}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.get(`${vefiryEpackQrCodeEndPoint}`).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const UpdateConnectorBattery = createAsyncThunk(`${driver}/${updateConnectorBattery}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.get(`${updateConnectorBatteryEndPoint}`).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});




