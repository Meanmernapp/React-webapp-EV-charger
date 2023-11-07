import React from 'react';
import { Box } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import FiBoxIcon from '../assets/common/fi_box.svg'

const SimpleChartBar = ({  data }) => {

    // Chart.js data for the doughnut chart
    const chartData = {
        datasets: [
            {
                data: data,
                backgroundColor: [ "#353535",'#AEAEB7'],
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
        <Box sx={{position:"relative"}} >
            <Doughnut data={chartData} options={chartOptions} 
            width="48px" height="48px" />
            <Box 
                sx={{
                    
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                <img src={FiBoxIcon} alt="fibox" />
            </Box>
           

        </Box>
    );
};

export default SimpleChartBar;
