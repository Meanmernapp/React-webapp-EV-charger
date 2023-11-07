import { Box, Button, Stack, Typography, colors } from '@mui/material'
import ESourceIcon from '../../../assets/map-view/esource.svg'
import LocationIcon from '../../../assets/common/location.svg'
import WarningIcon from '../../../assets/common/warning.svg'
import React from 'react'
import SimpleChartBar from '../../../components/SimpleChartBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const EsourceModal = () => {
    const { getHeaderHeight } = useSelector(state => state.SharedSlice)
    const navigate = useNavigate()
    const buttonSytle = {
        borderRadius: "0px",
        fontSize: "13px",
        background: '#D9D9D9',
        color: "#000"
    }

    return (
        <Box className="Ev_charger_modal_mapview" sx={{ height: `calc(100vh - ${getHeaderHeight}px)` }}>
            <Stack padding='1rem'>
                <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                    <Stack direction="row" gap="1rem">
                        <img src={ESourceIcon} alt="source" width="32px" height="32px" />
                        <Box>
                            <Typography variant='h4' component="h4">E-SOURCE</Typography>
                            <Typography variant='body2'>ID #234 975 06</Typography>
                        </Box>
                    </Stack>
                    <Typography variant='body1' paddingTop="0.8rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={LocationIcon} alt="" />
                        Saalweg 26, 34270 Schauenburg
                    </Typography>
                    <Typography variant='body2'> Opening hours: Mon-Fri, 9-18</Typography>

                </Box>
                <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: "1rem" }}>
                    <Typography variant='body2' paddingTop="0.5rem">PRICE</Typography>
                    <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem">
                        <Typography variant='body1' >200kW provided</Typography>
                        <Typography display="flex" alignItems="center" gap="0.2rem"
                            variant='h4' component="h4">
                            24€
                        </Typography>
                    </Stack>
                </Box>

                <Stack paddingTop="0.7rem" >
                    <Typography variant='body2'>CONNECTION</Typography>
                    <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                        <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem">
                            <Typography variant='h5' component="h5">EPACK EP422 21</Typography>
                            <Typography display="flex" alignItems="center" gap="0.2rem"
                                variant='body2'
                                sx={{
                                    background: '#BDDFFF',
                                    padding: "0rem 0.5rem",
                                    color: "#000000"
                                }}
                            >
                                <Box component="span" sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#1A73E8" }}></Box>
                                Charging
                            </Typography>
                        </Stack>
                        <Stack direction="row" gap="1rem" paddingTop="1rem">
                            <Box>
                                <SimpleChartBar data={[70, 30]} />
                                <Typography variant='body1' textAlign="center">70%</Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>150kWh/300KWh</Typography>
                                <Typography variant='body2'>Gleichstorm</Typography>
                                <Typography variant='body2'>ETF in 15min</Typography>
                            </Box>
                        </Stack>
                        {/* <Typography variant='body1' paddingTop="0.5rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={WarningIcon} alt="warning" />
                        10% Swap E-Pack soon!
                    </Typography>
                    <Typography variant='body2'>Estimated swapping time in 2hs.</Typography> */}
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                        <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem">
                            <Typography variant='h5' component="h5">EPACK EP422 21</Typography>
                            <Typography display="flex" alignItems="center" gap="0.2rem"
                                variant='body2'
                                sx={{
                                    background: '#CEDDB9',
                                    padding: "0rem 0.5rem",
                                    color: "#000000"
                                }}
                            >
                                <Box component="span" sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#71953E" }}></Box>
                                Charged
                            </Typography>
                        </Stack>
                        <Stack direction="row" gap="1rem" paddingTop="1rem">
                            <Box>
                                <SimpleChartBar data={[100, 0]} />
                                <Typography variant='body1' textAlign="center">100%</Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>150kWh/300KWh</Typography>
                                <Typography variant='body2'>Gleichstorm</Typography>
                                <Typography variant='body2'>ETF in 15min</Typography>
                            </Box>
                        </Stack>
                        {/* <Typography variant='body1' paddingTop="0.5rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={WarningIcon} alt="warning" />
                        10% Swap E-Pack soon!
                    </Typography>
                    <Typography variant='body2'>Estimated swapping time in 2hs.</Typography> */}
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                        <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem">
                            <Typography variant='h5' component="h5">EPACK EP422 21</Typography>
                            <Typography display="flex" alignItems="center" gap="0.2rem"
                                variant='body2'
                                sx={{
                                    background: '#EDC9C9',
                                    padding: "0rem 0.5rem",
                                    color: "#000000"
                                }}
                            >
                                <Box component="span" sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#FF553E" }}></Box>
                                failed
                            </Typography>
                        </Stack>
                        <Stack direction="row" gap="1rem" paddingTop="1rem">
                            <Box>
                                <SimpleChartBar data={[10, 90]} />
                                <Typography variant='body1' textAlign="center">10%</Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>150kWh/300KWh</Typography>
                                <Typography variant='body2'>Gleichstorm</Typography>
                                <Typography variant='body2'>ETF in 15min</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            {/* footer */}
            <Stack direction='row' gap="0.3rem" >
                <Button sx={buttonSytle} onClick={() => navigate("/actual-Status/esource")}>actual status</Button>
                <Button sx={buttonSytle} onClick={() => navigate("/actual-Status/operations")}>operation</Button>
                <Button sx={buttonSytle} onClick={() => navigate("/actual-Status/statistics")}>Statistics</Button>
            </Stack>
        </Box>
    )
}

export default EsourceModal

