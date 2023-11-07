import { Button, InputLabel, Stack, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import logo from "../../assets/logo/logoT.svg";
import "./login.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';
import { NewPassword } from '../../services/authetication/AutheticationApi';

const ResetNewPassword = () => {
    // hook
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [error, setError] = useState(false);
    const [Cerror, setCError] = useState(false);
    
    // const { token } = useParams();
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token')

   
    // function to toggle password visibility
    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleToggleCPasswordVisibility = () => {
        setShowCPassword((prevShowPassword) => !prevShowPassword);
    };

    
    const handlePasswordReset = () => {
        setPassword("")
        setError(false)
    }

    // function to handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError(false); // Reset error state on password change
    };

    
    const handleCPasswordReset = () => {
        setCPassword("")
        setCError(false)
    }

    // function to handle password change
    const handleCPasswordChange = (e) => {
        setCPassword(e.target.value);
        setCError(false); 
    };
    // function to handle login
    const handleNewPassword = () => {
        const data ={
            new_password: password,
            token: token
        }
        if(Cpassword !== password){
            setCError(true)
        }else{
            dispatch(NewPassword(data)).then( (res)=>{
                if(res.payload.status === 200){
                    toast.success(res.payload.data.data)
                    navigate("/")
                }  
            }
            )
        }
    };

    return (
        <Stack
            sx={{ background: (theme => theme.palette?.primary.main) }}
            height="100vh"
            justifyContent="center"
            alignItems="center"
    
        >
            <Stack position="relative">
                <img src={logo} alt="logo" width="155px" height="74px" />
            </Stack>
            <Box maxWidth="260px">

                <Typography variant='h6' textAlign="center" component={"h6"} sx={{ fontWeight: 'bold', paddingTop: "2rem" }} >
                Create a new password
                </Typography>
                <Typography variant='body1' textAlign="left" maxWidth="260px" paddingTop="1rem">
                Your password must be different from previous used passwords.
                </Typography>
                <br />
                <form>
                    <Box >
                        <InputLabel className='lable' htmlFor="password">New Password</InputLabel>
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
                    <Box >
                        <InputLabel className='lable' htmlFor="password">Confirm Password</InputLabel>
                        <TextField
                            size='small'
                            id='password'
                            type={showCPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={Cpassword}
                            onChange={handleCPasswordChange} // Call handlePasswordChange on password change
                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {Cerror ?
                                            <IconButton onClick={handleCPasswordReset} edge="end">
                                                <CancelIcon sx={{ color: (theme => theme?.palette?.error?.main) }} />
                                            </IconButton> :
                                            <IconButton onClick={handleToggleCPasswordVisibility} edge="end">
                                                {showCPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>}

                                    </InputAdornment>
                                ),
                                style: { borderColor: Cerror ? 'red' : 'inherit' },
                            }}
                            error={Cerror}
                            helperText={Cerror ? 'No Match Found' : ''}
                        />
                    </Box>
                    <Box sx={{ paddingTop: "1.5rem", display: 'flex', alignItems: 'center', gap: "1rem", flexDirection: "column" }}>

                        <Button sx={{
                            background: "#71953E", color: "#fff", "&:hover": {
                                background: "#BADA55",
                                color: "#000"
                            }
                        }} variant='contained' fullWidth onClick={handleNewPassword}>
                            Reset Password
                        </Button>
                      
                    </Box>

                </form>
            </Box>
        </Stack>
    );
};

export default ResetNewPassword;
