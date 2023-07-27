import React from 'react'
import { Box } from '@mui/material'
import FeedBack from './feedback/FeedBack'
import RegisteredUsers from './RegisteredUsers'
import ChargerStatus from './ChargerStatus'

const ChargingStation = () => {
    return (
        <Box sx={{background:"#ffffff"}}>
            <RegisteredUsers />
            <ChargerStatus />
            <FeedBack />
        </Box>
    )
}

export default ChargingStation