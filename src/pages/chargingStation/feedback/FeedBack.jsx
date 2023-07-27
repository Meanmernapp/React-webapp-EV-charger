import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import "./Feedback.scss"
import StatisticCard from './StatisticCard'
import CommentCard from './CommentCard'
const FeedBack = () => {
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
          <StatisticCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant='h3' component="h3" >
            Last comments
          </Typography>
          <CommentCard />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default FeedBack