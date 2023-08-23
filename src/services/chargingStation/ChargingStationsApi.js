import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../config/Axios';
import { chargingStation, createBatteryAvailable, createBatteryAvailableEndPoint, deleteBatteryAvailables, deleteBatteryAvailablesEndPoint, getBatteryAvailables, getBatteryAvailablesEndPoint, getBatteryPercentage, getBatteryPercentageEndPoint, getChargingStatus, getChargingStatusEndPoint, getConnectorStatus, getConnectorStatusEndPoint, getFeedbacks, getFeedbacksEndpint, getHistroyUser, getHistroyUserEndPoint, getPliotUser, getPliotUserEndPoint, updateBatteryAvailable, updateBatteryAvailableEndPoint, updateChargingStatus, updateChargingStatusEndPoint, updatePliotUser, updatePliotUserEndPoint } from "../../constants/chargingStation";

// pliot user 
export const GetPliotUser = createAsyncThunk(`${chargingStation}/${getPliotUser}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getPliotUserEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const GetHistroyUser = createAsyncThunk(`${chargingStation}/${getHistroyUser}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getHistroyUserEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const UpdatePliotUser = createAsyncThunk(`${chargingStation}/${updatePliotUser}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.put(`${updatePliotUserEndPoint}${params?.id}`,params?.data).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
// charging status
export const GetChargingStatus = createAsyncThunk(`${chargingStation}/${getChargingStatus}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getChargingStatusEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const UpdateChargingStatus = createAsyncThunk(`${chargingStation}/${updateChargingStatus}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.put(`${updateChargingStatusEndPoint}`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const CreateBatteryAvailables = createAsyncThunk(`${chargingStation}/${createBatteryAvailable}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.post(`${createBatteryAvailableEndPoint}`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const GetBatteryAvailables = createAsyncThunk(`${chargingStation}/${getBatteryAvailables}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getBatteryAvailablesEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const DeleteBatteryAvailables = createAsyncThunk(`${chargingStation}/${deleteBatteryAvailables}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.delete(`${deleteBatteryAvailablesEndPoint}${params}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const UpdateBatteryAvailable = createAsyncThunk(`${chargingStation}/${updateBatteryAvailable}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.put(`${updateBatteryAvailableEndPoint}/${params?.id}`,params?.data).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const GetBatteryPercentage = createAsyncThunk(`${chargingStation}/${getBatteryPercentage}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getBatteryPercentageEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
export const GetConnectorStatus = createAsyncThunk(`${chargingStation}/${getConnectorStatus}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getConnectorStatusEndPoint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});
// feedback
export const GetFeedbacks = createAsyncThunk(`${chargingStation}/${getFeedbacks}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.get(`${getFeedbacksEndpint}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

