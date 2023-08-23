import { Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Feedback.scss"
import StatisticCard from './StatisticCard'
import CommentCard from './CommentCard'
import { useSelector } from 'react-redux'
const FeedBack = () => {

  const [statisticsData, setStatisticsData] = useState([])
   // useSelector
   const {getFeedbacks} = useSelector(state => state.ChargingStationSlice)
   
   const countRates = (data) => {
    const ratesCount = { 1: 0, 2: 0, 3: 0 };
  
    data.forEach(item => {
      if (item.rate === 1) {
        ratesCount[1]++;
      } else if (item.rate === 2) {
        ratesCount[2]++;
      } else if (item.rate === 3) {
        ratesCount[3]++;
      }
    });
  
    return ratesCount;
  };

  const calculatePercentage = (data) => {
    const totalCount = data.length;
    const ratesCount = countRates(data);
  
    const rate1Percentage = ((ratesCount[1] / totalCount) * 100).toFixed(2)
    const rate2Percentage = ((ratesCount[2] / totalCount) * 100).toFixed(2)
    const rate3Percentage = ((ratesCount[3] / totalCount) * 100).toFixed(2)
  
    return {
      rate1Percentage,
      rate2Percentage,
      rate3Percentage,
    };
  };

  useEffect(() => {
    // Assuming calculatePercentage is a function to calculate the data
    const calculatedData = calculatePercentage(getFeedbacks);
    setStatisticsData(calculatedData);
  }, [getFeedbacks]);
  return (
    
    <Stack padding="1rem" className='feed_back'>
      <Typography variant='h1' component="h1">
        Feedback
      </Typography>
      <Grid container spacing={2} marginTop="0.5rem">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant='h3' component="h3">
            Statistics
          </Typography>
          <StatisticCard statisticsData={statisticsData} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant='h3' component="h3" >
            Last comments
          </Typography>
          <CommentCard data={getFeedbacks} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default FeedBack