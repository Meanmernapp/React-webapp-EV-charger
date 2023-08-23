import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CircleChart from './CircleChart';
import satisfiedIcon from '../../../assets/Icons/emoji/u_smile-beam.svg'
import angryIcon from '../../../assets/Icons/emoji/u_anger.svg'

const StatisticCard = ({ statisticsData }) => {
    const data = [
        { id: 1, name: 'Very Satisfied', percentage: statisticsData?.rate1Percentage, color: '#BADA55', icon: satisfiedIcon },
        { id: 2, name: 'Disappointed', percentage: statisticsData?.rate2Percentage, color: '#FF7246', icon: angryIcon },
        { id: 3, name: 'OK', percentage: statisticsData?.rate3Percentage, color: '#DBE13E', icon: '😐' },
    ];

    const highestPercentageItem = data.reduce((prev, current) => {
        // If any percentage is undefined, consider it as 0
        const prevPercentage = parseFloat(prev.percentage) || 0;
        const currentPercentage = parseFloat(current.percentage) || 0;

        return prevPercentage > currentPercentage ? prev : current;
    });

    // Access the name and icon of the item with the highest percentage
    const highestPercentageName = highestPercentageItem.name;
    const highestPercentageIcon = highestPercentageItem.icon;

    return (
        <Box className="Card_div">
            <Grid container spacing={2}>
                <Grid item md={5} xs={12} sm={5} xl={5} className="center_grid">
                    <Box className="chart_bar">
                        <CircleChart data={data} dataItem={{ text: highestPercentageName, icon: highestPercentageIcon }} />
                    </Box>
                </Grid>
                <Grid item md={7} sm={7} xl={7} className="center_grid">
                    <Stack sx={{ display: { xs: "none", md: 'flex', sm: "flex", xl: 'flex' } }}>
                        {
                            data?.sort((a, b) => b.percentage - a.percentage)
                                ?.map(item => {
                                    return (
                                        <Stack className='percentage_bar' key={item?.id}>
                                            <Box className="status_cirlce" sx={{
                                                backgroundColor:
                                                    item?.name === "Very Satisfied" && "#BADA55" ||
                                                    item?.name === "Disappointed" && "#FF7246" ||
                                                    item?.name === "OK" && "#DBE13E"
                                            }} />
                                            <Stack className='percentage_bar_inner'>
                                                <Typography>{item?.name}</Typography>
                                                <Typography>{item?.percentage}%</Typography>
                                            </Stack>
                                        </Stack>
                                    )
                                })
                        }



                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StatisticCard