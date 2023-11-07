import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../config/Axios';
import { authetication, login, loginEndpoint, newPassword, resetPassword, resetPasswordEnpoint,newPassowrdEndpoint, getUserProfileEndpoint, getUserProfile } from "../../constants/authetication";
import axios from "axios";

export const LoginUser = createAsyncThunk(`${authetication}/${login}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.post(`${loginEndpoint}`, params).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const ResetPassword = createAsyncThunk(`${authetication}/${resetPassword}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.post(`${resetPasswordEnpoint}`, params).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const NewPassword = createAsyncThunk(`${authetication}/${newPassword}`, async (params,{ dispatch, getState }) => {
    console.log(params)

    const axiosConfig = {
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      };
console.log(params.token)

    let result = await axios.post(`${import.meta.env.VITE_REACT_APP_DOMAIN}${newPassowrdEndpoint}`, {new_password:params.new_password},
    axiosConfig).then(function (response) {
      
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

export const GetUserProfile = createAsyncThunk(`${authetication}/${getUserProfile}`, async (params,{ dispatch, getState }) => {
    let result = await apiInstance.get(`${getUserProfileEndpoint}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});




