import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import the ErrorOutline icon
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logoT.svg";
import { LoginUser } from '../../services/authetication/AutheticationApi';
import "./login.css";

const Login = () => {
  // hook
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { executeRecaptcha } = useGoogleReCaptcha();
  // use State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false); // Change error state to boolean
  const { user } = useSelector((state) => state.AuthenticationSlice);

  // function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordReset = () => {
    setPassword("")
    setError(false)
  }

  // function to handle login
  const handleLogin = async () => {
    const recaptchaToken = await executeRecaptcha("login_action");
    const data = {
      email,
      password,
      recaptchaToken
    }
    
    dispatch(LoginUser(data)).then(res => {

      if (res.payload?.data?.status == false) {
        setError(true)
      } else {
        switch (res.payload?.data.data.role) {
          case "user":
            case "operator":
              navigate("/map-view");
              break;
            case "driver":
              navigate("/drivers")
              break;
            default:
              navigate("/login");
        }
      }
    })
  };

  // function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false); // Reset error state on password change
  };

  const onChangeRecapcha = (value) => {
    //action here
  }

  return (
    <Stack
      sx={{ background: (theme => theme.palette?.primary.main) }}
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >

      <img src={logo} alt="logo" width="155px" height="74px" />
      <Typography variant='h4' component={"h4"} className='heading_logo'>
        Log in
      </Typography>
      <br />
      <form>
        
        <Box>
          <InputLabel className='lable' htmlFor="email">Email</InputLabel>
          <TextField
            id='email'
            type="email"
            size='small'
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box >
          <InputLabel className='lable' htmlFor="password">Password</InputLabel>
          <TextField
            size='small'
            id='password'
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={password}
            onChange={handlePasswordChange} // Call handlePasswordChange on password change
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {error ?
                    <IconButton onClick={handlePasswordReset} edge="end">
                      <CancelIcon sx={{ color: (theme => theme?.palette?.error?.main) }} />
                    </IconButton> :
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>}

                </InputAdornment>
              ),
              style: { borderColor: error ? 'red' : 'inherit' },
            }}
            error={error}
            helperText={error ? 'Incorrect password. Please try again.' : ''}
          />
        </Box>
        <InputLabel className='lable' sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => navigate("forget-password")}
        >
          Forget Password?</InputLabel>
        <Box sx={{ paddingTop: "1rem" }}>
        </Box>
        <Box sx={{ paddingTop: "2rem" }}>
          <Button variant='contained' fullWidth onClick={handleLogin} sx={{
            background: "#71953E", color: "#fff", "&:hover": {
              background: "#BADA55",
              color: "#000"
            }
          }}>
            Log in
          </Button>
        </Box>
      </form>
    </Stack>
  );
};

export default Login;
