import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../config/Axios';
import { authetication, login, loginEndpoint } from "../../constants/authetication";

export const LoginUser = createAsyncThunk(`${authetication}/${login}`, async (params,{ dispatch, getState }) => {

    let result = await apiInstance.post(`${loginEndpoint}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});