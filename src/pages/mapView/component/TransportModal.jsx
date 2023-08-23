import { Box, Button, Stack, Typography, colors } from '@mui/material'
import ESourceIcon from '../../../assets/map-view/esource.svg'
import EpackIcon from '../../../assets/map-view/epack.svg'
import inTransportIcon from '../../../assets/map-view/inTransport.svg'
import LocationIcon from '../../../assets/common/location.svg'
import WarningIcon from '../../../assets/common/warning.svg'
import React from 'react'
import SimpleChartBar from '../../../components/SimpleChartBar'
import connectorIcon from '../../../assets/common/Conector.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import carIcon from '../../../assets/common/uCarSideview.svg'
import { Accordion, AccordionSummary, AccordionDetails, Badge } from '@mui/material';
import { useSelector } from 'react-redux'

const TransportModal = () => {
    const { getHeaderHeight } = useSelector(state => state.SharedSlice)
    const buttonSytle = {
        borderRadius: "0px",
        fontSize: "13px"
    }

    return (
        <Box className="Ev_charger_modal_mapview" >
            <Stack padding='1rem'>
                <Box sx={{ borderBottom: "1px solid #D1D1D1", paddingBottom: '0.7rem' }}>
                    <Stack direction="row" gap="1rem">
                        <img src={EpackIcon} alt="source" width="32px" height="32px" />
                        <Box>
                            <Typography variant='h4' component="h4">E-PACK</Typography>
                            <Typography variant='body2'>ID #234 975 06</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            <Stack textAlign="center" padding="1rem">
                <Typography variant='h4' component='h4'
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: "0.5rem"
                    }}>

                    <img src={inTransportIcon} alt="" /> Name of Transport
                </Typography>

                <Typography variant='h6' component="span"
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: "0.5rem",
                        opacity:"0.8"
                    }}>
                    To:
                    <Typography variant='h4' component='h4' >
                        Kirchstraße 24, Lutterberg
                    </Typography>
                </Typography>
                <Typography variant='h6' component="span"
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: "0.5rem",
                        opacity:"0.8"
                    }}>
                    From:
                    <Typography variant='h4' component='h4' >
                        Saalweg 26, Schauenburg
                    </Typography>
                </Typography>
                <Typography variant='h6' component="span"
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: "0.5rem",
                        opacity:"0.8"
                    }}>
                    ETA:
                    <Typography variant='h4' component='h4' >
                        11:05
                    </Typography>
                </Typography>
                <Typography variant='h6' component="span"
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: "0.5rem",
                        opacity:"0.8"
                    }}>
                    Driver:
                    <Typography variant='h4' component='h4' >
                        Daiana Rotchen
                    </Typography>
                </Typography>
            </Stack>
            {/* footer */}
            <Stack direction='row' gap="0.3rem" >
                <Button sx={{ borderRadius: "0px", fontSize: "13px" }}>actual status</Button>
                <Button sx={buttonSytle}>operation</Button>
                <Button sx={buttonSytle}>Statistics</Button>
            </Stack>
        </Box>
    )
}

export default TransportModal

