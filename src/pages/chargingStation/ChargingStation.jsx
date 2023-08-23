import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import FeedBack from './feedback/FeedBack'
import RegisteredUsers from './RegisteredUsers'
import ChargerStatus from './ChargerStatus'
import { useDispatch, useSelector } from 'react-redux';
import { GetBatteryAvailables, GetBatteryPercentage, GetChargingStatus, GetConnectorStatus, GetFeedbacks, GetHistroyUser, GetPliotUser } from '../../services/chargingStation/ChargingStationsApi'

const ChargingStation = () => {
    const dispatch = useDispatch();
   
    // useSelector
    const { deleteBatteryAvailables, createBatteryAvailable,updatePliotUser,updateBatteryAvailable } = useSelector(state => state.ChargingStationSlice)

    useEffect(() => {
        dispatch(GetChargingStatus())
        dispatch(GetFeedbacks())
        dispatch(GetBatteryPercentage())
        dispatch(GetHistroyUser())
        dispatch(GetConnectorStatus())
    }, [])

    useEffect(()=>{
        dispatch(GetPliotUser())
    },[updatePliotUser])
    useEffect(() => {
        dispatch(GetBatteryAvailables())
    }, [deleteBatteryAvailables, createBatteryAvailable, updateBatteryAvailable])
    return (
        <Box sx={{ background: "#ffffff" }}>
            <RegisteredUsers />
            <ChargerStatus />
            <FeedBack />
        </Box>
    )
}

export default ChargingStation