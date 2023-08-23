import React from 'react';
import { Box, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

const BatteryStatus = ({ batteryPercentage, batteryValue, data }) => {

    // Get the battery status based on the percentage
    const getBatteryStatus = () => {
        if (batteryPercentage >= 50) {
            return '#74ad3f';
        } else if (batteryPercentage >= 25) {
            return '#E5D73E';
        } else {
            return '#FF7246';
        }
    };
    // Chart.js data for the doughnut chart
    const chartData = {
        datasets: [
            {
                data: [batteryPercentage, 100 - batteryPercentage],
                backgroundColor: [getBatteryStatus(), '#000000'],
                borderWidth: 5,
                borderColor: '#000',
                outerWidth: 2,
            },
        ],
    };

    // Chart.js options for the doughnut chart
    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '88%', // Adjust the cutout percentage as per your preference
        maintainAspectRatio: false,

        responsive: true,
      
    };


    return (
        <Box className="energy_availble_box" >
            <Doughnut data={chartData} options={chartOptions}
                width="270px"
                height="270px"

            />
            <Typography variant='h1' component="h1"
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                est.
            </Typography>
            <Typography variant='h1' component="h1" sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                {batteryValue}KWh*
            </Typography>

            <Typography
                variant="h3"
                component="h3"
                sx={{
                    position: 'absolute',
                    top: '65%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    // color: getBatteryStatus(),
                }}
            >
                {batteryPercentage + '%'}
            </Typography>

            {
                data?.batteryStatus === "old" &&
                <Typography variant='h3' component="h3"
                    sx={{
                        position: 'absolute',
                        textAlign:'center',
                        top: '80%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: "#FF7246",
                    }} >
                    Not Up To Date
                </Typography>
            }

        </Box>
    );
};

export default BatteryStatus;
