import { Button, InputLabel, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logoT.svg";
import "./login.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ConfirmEmail = () => {
    // hook
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // use State
    const [email, setEmail] = useState('');

    // a function to open email account
    const handleOpenEmailApp = () => {
        const emailClientURL = 'https://mail.google.com/mail/u/0/#inbox';
        window.open(emailClientURL, '_blank');
        // navigate("/reset-password")
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
                    Check your email
                </Typography>
                <Typography variant='body1' textAlign="left" maxWidth="260px" paddingTop="1rem">
                    We have sent you an email to with instructions to reset your password.
                </Typography>
                <br />
                <form>

                    <Box sx={{ paddingTop: "1.5rem", display: 'flex', alignItems: 'center', gap: "1rem", flexDirection: "column" }}>

                        <Button sx={{
                            background: "#71953E", color: "#fff", "&:hover": {
                                background: "#BADA55",
                                color: "#000"
                            }
                        }} variant='contained' fullWidth onClick={handleOpenEmailApp}>
                            Open Email App
                        </Button>
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                border: "1px solid #71953E", color: "#71953E", "&:hover": {
                                    border: " 1px solid #BADA55",
                                    color: "#000"
                                }
                            }} variant='outlined' fullWidth >
                            cancel
                        </Button>
                    </Box>

                </form>
            </Box>
        </Stack>
    );
};

export default ConfirmEmail;
