import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CircleChart from './CircleChart';
import satisfiedIcon from '../../../assets/Icons/emoji/u_smile-beam.svg'


const StatisticCard = () => {

    const data = [
        { name: 'Very Satisfied', percentage: 70, color: '#BADA55', icon: satisfiedIcon },
        { name: 'Disappointed', percentage: 25, color: '#FF7246', icon: '😞' },
        { name: 'OK', percentage: 5, color: '#DBE13E', icon: '😐' },
    ];


    // Find the item with the highest percentage
    const highestPercentageItem = data.reduce((prev, current) =>
        prev.percentage > current.percentage ? prev : current
    );

    // Access the name and icon of the item with the highest percentage
    const highestPercentageName = highestPercentageItem.name;
    const highestPercentageIcon = highestPercentageItem.icon;


    return (
        <Box className="Card_div">
            <Grid container spacing={2}>
                <Grid item  md={5} xs={12} sm={5} xl={5} className="center_grid">
                    <Box className="chart_bar">
                    <CircleChart data={data} dataItem={{ text: highestPercentageName, icon: highestPercentageIcon }} />
                    </Box>
                </Grid>
                <Grid item  md={7} sm={7} xl={7}  className="center_grid">
                    <Stack sx={{display:{xs:"none", md:'flex', sm:"flex", xl:'flex'}}}>
                        <Stack className='percentage_bar'>
                            <Box className="status_cirlce" sx={{ backgroundColor: "#BADA55" }} />
                            <Stack className='percentage_bar_inner'>
                                <Typography>Very Satisfied</Typography>
                                <Typography>70%</Typography>
                            </Stack>
                        </Stack>
                        <Stack className='percentage_bar'>
                            <Box className="status_cirlce" sx={{ backgroundColor: "#FF7246" }} />
                            <Stack className='percentage_bar_inner'>
                                <Typography>Disappointed</Typography>
                                <Typography>25%</Typography>
                            </Stack>
                        </Stack>
                        <Stack className='percentage_bar' sx={{ borderBottom: "none !important" }}>
                            <Box className="status_cirlce" sx={{ backgroundColor: "#DBE13E" }} />
                            <Stack className='percentage_bar_inner'>
                                <Typography>Ok</Typography>
                                <Typography>5%</Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StatisticCard