import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import cryptoJs from 'crypto-js'

const HeaderLayout = () => {
  const tokenDecrpt = sessionStorage.getItem("token")
  const bytes = cryptoJs.AES.decrypt(tokenDecrpt || "no", import.meta.env.VITE_SECURE_KEY)
  const token = bytes.toString(cryptoJs.enc.Utf8);
  const navigate = useNavigate()
  const { user } = useSelector(state => state.AuthenticationSlice)
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