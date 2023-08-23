import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBarMap from '../../components/SideBarMap'
import ActualStatus from './ActualStatus'

const ActualStatusLayout = () => {
    const { getHeaderHeight } = useSelector(state => state.SharedSlice)
    const mapViewHeight = `calc(100vh - ${getHeaderHeight}px)`;

    const isSmallerScreen = useMediaQuery((theme => theme.breakpoints.down('sm')))
    return (
        <Stack direction="row" >
            <Stack
                width="310px"
                height={mapViewHeight}
                sx={{ backgroundColor: (theme => theme.palette.background.default), display: isSmallerScreen ? "none" : 'flex' }}
            >
                <SideBarMap />
            </Stack>
          
            <Stack width="100%" height={mapViewHeight} sx={{background:"#fff"}} >
                <ActualStatus/>
            </Stack>
        </Stack>
    )
}

export default ActualStatusLayout