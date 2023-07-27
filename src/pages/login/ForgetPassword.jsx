import { Button, InputLabel, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logoT.svg";
import "./login.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgetPassword = () => {
    // hook
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // use State
    const [email, setEmail] = useState('');

    // function to handle login
    const handleForget = () => {
        const data = {
            email
        }


    };

    return (
        <Stack
            sx={{ background: (theme => theme.palette?.primary.main) }}
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack  position="relative">
                <ArrowBackIcon sx={{position:'absolute', top:"39%" , left:"-77px",cursor:"pointer"}}
                onClick={()=> navigate(-1)}
                />
                <img src={logo} alt="logo" width="155px" height="74px"/>
            </Stack>
            <Typography variant='h6' component={"h6"} sx={{ fontWeight: 'bold', paddingTop: "2rem" }} >
                Reset your passowrd
            </Typography>
            <br />
            <form>
                <Box>
                    <InputLabel className='lable'>Email</InputLabel>
                    <TextField
                        type="email"
                        size='small'
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>

                    <Button variant='contained' fullWidth onClick={handleForget}>
                        Next
                    </Button>
                </Box>

            </form>
        </Stack>
    );
};

export default ForgetPassword;
