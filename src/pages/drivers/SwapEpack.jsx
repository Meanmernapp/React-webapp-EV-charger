import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DriverStepper from './components/DriverStepper'
import { toast } from 'react-toastify'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import { QrReader } from 'react-qr-reader';
import confrimCheckIcon from "../../assets/common/confirmcheck.svg"
import Battery20Icon from '@mui/icons-material/Battery20';



const SwapEpack = () => {
    const [step, setStep] = useState(0)
    const [qrCodeInput, setQrCodeInput] = useState("")
    const [scannedResult, setScannedResult] = useState(null);
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const [verifyId, setVerifiyId] = useState(false)
    const [error, setError] = useState(false)


    // Handle QR code scan success
    const handleScan = (data) => {
        if (data) {
            setScannedResult(data);
            setQrCodeInput(data);
        }
    };

    // Handle QR code scan error
    const handleError = (err) => {
        console.error(err);
        setError(true);
    };

    // Function to open the QR scanner
    const openQrScanner = () => {
        setIsScannerOpen(true);
    };

    // Function to close the QR scanner
    const closeQrScanner = () => {
        setIsScannerOpen(false);
    };

    useEffect(() => {
        if (step > 2) {
            toast.success("completed")
            setStep(0)
        }

    }, [step])
    return (
        <Box sx={{ background: "#fff" }} >
            {/* info header dev */}
            <Stack direction={"row"} padding={"1.5rem"} justifyContent={"space-between"}>
                <Typography
                    variant="h4"
                    component={"h2"}>Swap E-Packs</Typography>
                <Stack direction={"row"} gap={"0.3rem"}>
                    <Typography
                        variant="body1"
                        sx={{ color: "#7A7A7A" }}>
                        Request time:
                    </Typography>
                    <Typography variant="body1">Mon 27 Sept 14.41</Typography>
                </Stack>

            </Stack>
            {/* stepper */}
            <Box sx={{ background: "#F7F7F7", paddingTop: "1rem", paddingBottom: '1rem' }}>
                <DriverStepper activeStep={step} />
            </Box>


            {/* step 0 */}
            {
                step === 0 &&
                <Box padding={"1rem"}>
                    <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                        First Collection
                    </Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>

                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                id="epack_edition"
                                placeholder="E-Pack Edison (1km)"
                                size="small"
                            // value={age}
                            // label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={1}>1 km</MenuItem>
                                <MenuItem value={2}>2 km</MenuItem>
                                <MenuItem value={3}>3 km</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Typography variant='h4' paddingTop={"1rem"}>
                        Steps
                    </Typography>
                    <Box paddingTop={"1rem"}>
                        <Typography variant='h4' sx={{ color: "#7A7A7A" }}>
                            1. Collect E-Pack Edison at

                        </Typography>

                        <Typography variant='h4' sx={{ color: "#BADA55" }}>
                            24-Autohof Lutterberg (1km)
                        </Typography>

                        <Stack direction={'row'} justifyContent={"flex-end"}>
                            <Typography variant='body1'
                                sx={{
                                    color: '#7A7A7A',
                                    display: 'flex',
                                    alignItems: "center",
                                    gap: '0.4rem',

                                    "&:hover": {

                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        color: "#88B14B"
                                    }
                                }} >
                                See route
                                <ArrowForwardIcon sx={{ width: "0.8em", height: "0.8em" }} />
                                {/* <img src={ArrowRightIcon} alt="arrow_right" /> */}
                            </Typography>
                        </Stack>

                    </Box>
                    <Box paddingTop={"1rem"}>
                        <Typography variant='h4' sx={{ color: "#7A7A7A" }}>
                            2. Connect E-Pack Edison and load E-Pack Einstein at

                        </Typography>

                        <Typography variant='h4' sx={{ color: "#BADA55" }}>
                            Solar Park (10km)
                        </Typography>

                        <Stack direction={'row'} justifyContent={"flex-end"}>
                            <Typography variant='body1'
                                sx={{
                                    color: '#7A7A7A',
                                    display: 'flex',
                                    alignItems: "center",
                                    gap: '0.4rem',

                                    "&:hover": {

                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        color: "#88B14B"
                                    }
                                }} >
                                See route
                                <ArrowForwardIcon sx={{ width: "0.8em", height: "0.8em" }} />
                                {/* <img src={ArrowRightIcon} alt="arrow_right" /> */}
                            </Typography>
                        </Stack>

                    </Box>
                    <Box paddingTop={"1rem"}>
                        <Typography variant='h4' sx={{ color: "#7A7A7A" }}>
                            3. Unload and connect E-Pack Einstain at
                        </Typography>

                        <Typography variant='h4' sx={{ color: "#BADA55" }}>
                            24-Autohof Lutterberg (1km)

                        </Typography>

                        <Stack direction={'row'} justifyContent={"flex-end"}>
                            <Typography variant='body1'
                                sx={{
                                    color: '#7A7A7A',
                                    display: 'flex',
                                    alignItems: "center",
                                    gap: '0.4rem',

                                    "&:hover": {

                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        color: "#88B14B"
                                    }
                                }} >
                                See route
                                <ArrowForwardIcon sx={{ width: "0.8em", height: "0.8em" }} />
                                {/* <img src={ArrowRightIcon} alt="arrow_right" /> */}
                            </Typography>
                        </Stack>

                    </Box>
                </Box>
            }
            {/* step 1  and verifyId is false*/}
            {
                step === 1 && verifyId === false &&
                <Box padding={"1rem"}>
                    <Typography variant='h4' paddingTop={"1rem"} textAlign={"center"}>
                        E-Pack Edison
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        paddingTop: "2rem"
                    }}>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            background: "#BADA55",
                            width: "51px", height: "51px",
                            borderRadius: "50%",
                            "&:hover": {
                                background: "gray",
                                color: "#BADA55"
                            }

                        }}
                            onClick={() => openQrScanner()}
                        >

                            <QrCodeScannerIcon />
                        </Box>
                    </Box>


                    {isScannerOpen && (
                        <Box sx={{position:"absolute", height:"100vh" , top:"0" ,left:"0"}}>

                            <QrReader 
                                delay={300}
                                onError={handleError}
                                onScan={handleScan}
                                onImageLoad={closeQrScanner} // Closes the scanner when a QR code is scanned
                                facingMode="environment" // Use the rear camera for better focus
                                constraints={{
                                    width: { ideal: 640 }, // Set the desired width
                                    height: { ideal: 480 }, // Set the desired height
                                    facingMode: "environment", // Use the rear camera
                                    focusMode: "continuous", // Set focus mode to continuous (if supported)
                                }}
                            />
                        </Box>
                    )}
                    <Typography variant='h4' paddingTop={"1rem"} textAlign={"center"}>
                        Scan to confirm if the EP is right
                    </Typography>

                    <Box paddingTop={"2rem"}>
                        <InputLabel className='lable' htmlFor="qrcodeinput" sx={{ color: "#7A7A7A" }}>Type E-PACK ID Number</InputLabel>
                        <TextField
                            id='qrcodeinput'
                            type="text"
                            size='small'
                            variant="outlined"
                            value={qrCodeInput}
                            onChange={(e) => setQrCodeInput(e.target.value)}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {error &&
                                            <IconButton onClick={() => setQrCodeInput("")} edge="end">
                                                <CancelIcon sx={{ color: (theme => theme?.palette?.error?.main) }} />
                                            </IconButton>}

                                    </InputAdornment>
                                ),
                                style: { borderColor: error ? 'red' : 'inherit' },
                            }}
                        />
                    </Box>
                </Box>
            }

            {/* step 1  and verifyId is false*/}
            {
                step === 1 && verifyId === true &&
                <Box padding={"1rem"}>
                    <Typography variant='h4' paddingTop={"1rem"} textAlign={"center"}>
                        E-Pack Edison
                    </Typography>
                    <Typography variant='h4' paddingTop={"1rem"} textAlign={"center"}>
                        ID 79789
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        paddingTop: "2rem"
                    }}>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            background: "#BADA55",
                            width: "51px", height: "51px",
                            borderRadius: "50%",
                            "&:hover": {
                                background: "#fff",
                                border: "1px solid",
                                color: "#BADA55"
                            }

                        }}
                            onClick={() => openQrScanner()}
                        >
                            <img src={confrimCheckIcon} alt="confirmCheck" />
                        </Box>
                    </Box>
                    <Typography variant='h4' paddingTop={"1rem"} textAlign={"center"}>
                        Yep, right EP
                    </Typography>


                </Box>
            }

            {/* step 2 info and disconnect */}
            {
                step === 2 &&
                <Box>
                    <Box sx={{
                        background: "#EAEAEA",
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem",
                        gap: "1rem",
                    }}>
                        <Box sx={{
                            background: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            width: "49px",
                            height: "49px"
                        }}>
                            <Battery20Icon sx={{ rotate: "90deg" }} />
                        </Box>
                        <Typography variant='h4' textAlign={"center"}>
                            E-Pack Edison
                        </Typography>

                    </Box>
                    <Box padding={"1rem"}>

                        <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                            ID: 71823
                        </Typography>
                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                Location:
                            </Typography>
                            <Typography variant='body1' >
                                24-Autohof Lutterberg Conected
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                Conected to:
                            </Typography>
                            <Typography variant='body1' >
                                EV Thomas
                            </Typography>
                        </Stack>

                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                LAST ACtivity:
                            </Typography>
                            <Typography variant='body1' >
                                Mon 27 Sept 14.41
                            </Typography>
                        </Stack>

                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                SOC:
                            </Typography>
                            <Typography variant='body1' >
                                100%
                            </Typography>
                        </Stack>

                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                Capacity:
                            </Typography>
                            <Typography variant='body1' >
                                200kWh
                            </Typography>
                        </Stack>


                        <Stack direction={"row"} gap={"0.5rem"} paddingTop={"0.5rem"}>
                            <Typography variant='body1' sx={{ color: '#7A7A7A' }}>
                                Capacity:
                            </Typography>
                            <Typography variant='body1' >
                                250kWh/300kwh
                            </Typography>
                        </Stack>



                    </Box>
                </Box>


            }

            <Box padding={"2rem"} maxWidth={"250px"} margin={"0 auto"}>
                <Button variant='contained'
                    disabled={step === 1 && verifyId === false}
                    fullWidth
                    onClick={() => step !== 2 && setStep(step + 1)}

                    sx={{
                        background: "#71953E", color: "#fff", "&:hover": {
                            background: "#BADA55",
                            color: "#000"
                        }
                    }}>
                    {
                        step === 2 ? "Disconnect E-Pack" : "Confirm, next step"
                    }

                </Button>
            </Box>


        </Box>
    )
}

export default SwapEpack