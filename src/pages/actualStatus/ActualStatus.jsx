import { Box, Typography } from '@mui/material'
import React from 'react'

const ActualStatus = () => {
    return (
        <Box sx={{padding:"1rem"}}>
            <Typography variant='h3' component="h3">
                Actual Status of all devices
            </Typography>
            <Box sx={{paddingTop:"1rem"}}>
            <Typography variant='h4' component="h4">
               Epack
            </Typography>
            table
            </Box>
            <Box sx={{paddingTop:"1rem"}}>
            <Typography variant='h4' component="h4">
               Ev Charger
            </Typography>
            table
            </Box>
            <Box sx={{paddingTop:"1rem"}}>
            <Typography variant='h4' component="h4">
               E Source
            </Typography>
            table
            </Box>
        </Box>
    )
}

export default ActualStatus