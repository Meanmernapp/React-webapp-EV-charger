import { Box, Button, Stack, Typography, colors } from '@mui/material'
import ESourceIcon from '../../../assets/map-view/esource.svg'
import LocationIcon from '../../../assets/common/location.svg'
import WarningIcon from '../../../assets/common/warning.svg'
import React from 'react'
import SimpleChartBar from '../../../components/SimpleChartBar'
import connectorIcon from '../../../assets/common/Conector.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import carIcon from '../../../assets/common/uCarSideview.svg'
import { Accordion, AccordionSummary, AccordionDetails, Badge } from '@mui/material';
import { useSelector } from 'react-redux'

const EpackModal = () => {
    const { getHeaderHeight } = useSelector(state => state.SharedSlice)
    const buttonSytle = {
        borderRadius: "0px",
        fontSize: "13px"
    }

    return (
        <Box className="Ev_charger_modal_mapview" sx={{ height: `calc(100vh - ${getHeaderHeight}px)` }}>
            <Stack padding='1rem'>
                <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                    <Stack direction="row" gap="1rem">
                        <img src={ESourceIcon} alt="source" width="32px" height="32px" />
                        <Box>
                            <Typography variant='h4' component="h4">E-PACK</Typography>
                            <Typography variant='body2'>ID #234 975 06</Typography>
                        </Box>
                    </Stack>
                    <Typography variant='body1' paddingTop="0.8rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={LocationIcon} alt="" />
                        Kirchstraße 24, Lutterberg
                    </Typography>
                    <Stack direction="row" gap="1rem" paddingTop="1rem">
                        <Box>
                            <SimpleChartBar />
                            <Typography variant='body1' textAlign="center">70%</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2'>150kWh/300KWh</Typography>
                            <Typography variant='body2'>Gleichstorm</Typography>
                            <Typography variant='body2'>ETF in 15min</Typography>
                        </Box>
                    </Stack>
                    <Typography variant='body1' paddingTop="0.5rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={WarningIcon} alt="warning" />
                        10% Swap E-Pack soon!
                    </Typography>
                    <Typography variant='body2'>Estimated swapping time in 2hs.</Typography>
                </Box>

                <Stack paddingTop="0.7rem" sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                    <Typography variant='body2'>CONNECTION</Typography>
                    <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem">
                        <Typography variant='h5' component="h5">EV-CHARGER NAME</Typography>
                        <Typography display="flex" alignItems="center" gap="0.2rem"
                            variant='body2'
                            sx={{
                                background: '#CEDDB9',
                                padding: "0rem 0.5rem",
                                color: "#000000"
                            }}
                        >
                            <Box component="span" sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#71953E" }}></Box>
                            E-Pack conected
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap="1rem" paddingTop="1rem">
                        <Box>
                            <SimpleChartBar />
                            <Typography variant='body1' textAlign="center">70%</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2'>150kWh/300KWh</Typography>
                            <Typography variant='body2'>Gleichstorm</Typography>
                            <Typography variant='body2'>ETF in 15min</Typography>
                        </Box>
                    </Stack>
                    <Typography variant='body1' paddingTop="0.5rem" alignItems="center" display="flex" gap="0.5rem">
                        <img src={WarningIcon} alt="warning" />
                        10% Swap E-Pack soon!
                    </Typography>
                    <Typography variant='body2'>Estimated swapping time in 2hs.</Typography>

                </Stack>
                <Stack paddingTop='0.5rem'>
                    <Typography variant='body2'>OUTPUT</Typography>
                    <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem" alignItems="center">
                        <Stack direction="row" alignItems="center" gap="0.3rem">
                            <img src={connectorIcon} alt="connector" width="24px" height="24px" />
                            <Typography variant='h5' component="h5">COMBO CCS EU #1</Typography>
                        </Stack>
                        <Typography display="flex" alignItems="center" gap="0.2rem"
                            variant='body2'
                            sx={{
                                background: '#EDC9C9',
                                padding: "0rem 0.5rem",
                                color: "#000000"
                            }}
                        >
                            <Box sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#FF553E" }}></Box>
                            OCCUPIED
                        </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent="space-between" paddingTop="0.4rem" paddingLeft="1.4rem">
                        <Typography variant='body2'>150kW/Gleichstorm</Typography>
                        <Typography variant='body1' sx={{ color: "#FF553E" }}>ETA: 30 min</Typography>
                    </Stack>
                    <Accordion sx={{ backgroundColor: "#F9F9F9", boxShadow: "none", paddingTop: '0.5rem' }} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-setsize={"small"}
                            aria-controls="panel-content"
                            id="panel-header"
                            sx={{ minHeight: "35px", maxHeight: "35px", padding: "0rem" }}
                        >
                            <Typography variant='h4' component='h4'
                                sx={{
                                    display: 'flex',
                                    alignItems: "center",
                                    gap: "0.5rem"

                                }}>

                                <img src={carIcon} alt="" /> vehicle
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "8px 6px 16px" }}>
                            <Typography variant='body1'>

                                Card RFID: 111111
                            </Typography>
                            <Typography variant='body1'>
                                Price(EUR/kWh): 0,49$
                            </Typography>
                            <Typography variant='body1'>
                                SOC: 37%
                            </Typography>
                            <Typography variant='body1'>
                                Duration minutes: 2
                            </Typography>
                            <Typography variant='body1'>
                                Remaining time(min): 0
                            </Typography>
                            <Typography variant='body1'>
                                Output energy: 2.8kWh
                            </Typography>
                            <Typography variant='body1'>
                                Charge voltage(V): 363.6
                            </Typography>
                            <Typography variant='body1'>
                                Charge current(A): 251.6
                            </Typography>
                            <Typography variant='body1'>
                                Charge power(kW): 91.5
                            </Typography>
                            <Typography variant='body1'>
                                Status: Charging
                            </Typography>
                            <Typography variant='body1'>
                                Connector temperature: 23.0°
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Stack direction="row" justifyContent="space-between" paddingTop="0.5rem" alignItems="center">
                        <Stack direction="row" alignItems="center" gap="0.3rem">
                            <img src={connectorIcon} alt="connector" width="24px" height="24px" />
                            <Typography variant='h5' component="h5">COMBO CCS EU #2</Typography>
                        </Stack>
                        <Typography display="flex" alignItems="center" gap="0.2rem"
                            variant='body2'
                            sx={{
                                background: '#CEDDB9',
                                padding: "0rem 0.5rem",
                                color: "#000000"
                            }}
                        >
                            <Box component="span" sx={{ width: "7px", height: "7px", borderRadius: '50%', background: "#71953E" }}></Box>
                            AVAILABLE
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            {/* footer */}
            {/* <Stack direction='row' gap="0.3rem" >
                <Button sx={{ borderRadius: "0px", fontSize: "13px" }}>actual status</Button>
                <Button sx={buttonSytle}>operation</Button>
                <Button sx={buttonSytle}>Statistics</Button>
            </Stack> */}
        </Box>
    )
}

export default EpackModal

