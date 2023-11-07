import { Button, InputLabel, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logoT.svg";
import "./login.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';
import { ResetPassword } from '../../services/authetication/AutheticationApi';

const ForgetPassword = () => {
    // hook
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // use State
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    // function to handle login
    const handleForget = () => {
        if (email) {
            if (isValid) {
                const data = {
                    email
                }
                dispatch(ResetPassword(data))
                navigate("/confirm-email")

            } else {
                setMessage("Please provide a valid email address.")
            }


        } else {
            setError(true)
            setMessage("Email field is required")

        }
    };

    useEffect(() => {
        if (email) {
            if (isValid) {
                setError(false)
            } else {
                setError(true)
                setMessage("Please provide a valid email address.")
            }
        } else {
            setError(false)
        }
    }, [email])

    // a function to check email valid on change
    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = emailRegex.test(enteredEmail);
        setEmail(enteredEmail);
        setIsValid(isValidEmail);

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
                    Reset your passowrd
                </Typography>
                <Typography variant='body1' textAlign="left" maxWidth="260px" paddingTop="1rem">
                    Enter your email address and we will send an email with instructions to reset your password.
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
                            onChange={(e) => { handleEmailChange(e) }}
                            fullWidth
                            margin="normal"
                            error={error}
                            helperText={error ? message : ''}
                        />
                    </Box>
                    <Box sx={{ paddingTop: "1.5rem", display: 'flex', alignItems: 'center', gap: "1rem", flexDirection: "column" }}>

                        <Button sx={{
                            background: "#71953E", color: "#fff", "&:hover": {
                                background: "#BADA55",
                                color: "#000"
                            }
                        }} variant='contained' fullWidth onClick={handleForget}>
                            Next
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

export default ForgetPassword;
