import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

const HeaderLayout = () => {
  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()
  const { user } = useSelector(state => state.AuthenticatioauthennSlice)
  // this useEffect to redirect auth user to page
  useEffect(() => {
    if (!token || !user) {
      navigate('/')
    }

  }, [navigate])
  return (
    <Box>
      <Header />
      {/* <Container maxWidth="xl"> */}
      <Outlet />
      {/* </Container> */}
    </Box>
  )
}

export default HeaderLayout