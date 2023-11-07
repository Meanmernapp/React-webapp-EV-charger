import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const OverHeatingAlert = ({ icon, color }) => {
    return (
        <Box className="over_heat_alert" sx={{ color: '#fff' }}>
            <Stack direction="row" gap="1rem"  alignItems="left">
                <Box>

                <img src={icon} alt="icon" />
                </Box>
                <Box>
                    <Box>
                        <Typography variant='h3' component="h3">EV-Charger Overheating </Typography>
                        <Typography variant='body1' paddingTop="0.4rem">Kirchstraße 24, Lutterberg</Typography>
                    </Box>

                    <Stack direction="row"  alignItems="center" justifyContent="space-between" paddingTop="1rem">
                        <Link to="#">Ignore</Link>
                        <Link to="/operations">Go to operations </Link>
                    </Stack>
                </Box>

            </Stack>

        </Box>
    )
}

export default OverHeatingAlert