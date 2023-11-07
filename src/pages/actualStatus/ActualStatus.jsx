
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Box, IconButton, Typography, TextField, Button } from '@mui/material';
import StationIcon from '../../assets/actualStatus/Station.svg';
import InTransportIcon from '../../assets/actualStatus/inTransport.svg';
import UbuildingIcon from '../../assets/actualStatus/u_building.svg';
import FiSunIcon from '../../assets/actualStatus/fi_sun.svg';
import React, { useEffect, useState } from 'react'
import { getStausBackgroundActualStausById } from '../../utils/getStausBackgroundActualStausById';
import { getStausCircleActualStausById } from '../../utils/getStausCircleActualStausById';
import EpackData from "../../mockData/actualStatus/epackTableData.json"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSidebar } from '../../services/ui/UISlice';
import addIcon from "../../assets/common/AddCircleIcon.svg"

const ActualStatus = () => {
    const [sortedData, setSortedData] = useState(EpackData);
    const [sortStatus, setSortStatus] = useState("none")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // a funtion which handle sort 
    const sortData = (value) => {
        // Sort the data
        const sorted = [...EpackData].sort((a, b) => {
            switch (value) {
                case "a":
                    if (a.status < b.status) return -1;
                    if (a.status > b.status) return 1;
                    break;
                case "d":
                    if (a.status > b.status) return -1;
                    if (a.status < b.status) return 1;
                    break;
                default:
                    break;
            }
            return 0;
        });

        // Update both the sorted data and the sorting order in one setState call
        setSortedData(sorted);
    };

    // style
    const sortStyle =
    {
        marginTop: "-0.5rem", cursor: "pointer", fontSize: "1.2rem",
        "&:hover": {
            color: "#BADA55"
        }
    }
    // Set Sidebar
    useEffect(() => {
        dispatch(setSidebar(null))
    }, [])
    return (
        <Box sx={{ padding: "1rem", overflow: 'scroll', background: "#ffffff" }} >
            <Stack direction="row" justifyContent="space-between">
                <Typography variant='h3' component="h3">
                    Actual Status of all devices
                </Typography>
                <Button
                    onClick={() => navigate("/actual-Status/add-device")}
                    sx={{
                        color: "#7A7A7A", display: 'flex', gap: "0.4rem",
                        "&:hover": {
                            background: "#BADA55",
                            color: "#7A7A7A"
                        }
                    }}>
                    <img src={addIcon} alt="add icon" />
                    Add Device
                </Button>

            </Stack>
            <Box sx={{ paddingTop: "1rem" }}>
                <Typography variant='h4' component="h4" paddingBottom="1rem">
                    Epack
                </Typography>
                <TableContainer component={Paper} sx={{ background: "#f9f9f9" }}>
                    <Table className='register_table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>NAME</TableCell>
                                <TableCell>LOCATION</TableCell>
                                <TableCell>CONNECTIONS</TableCell>
                                <TableCell >
                                    <Box sx={{ display: 'flex', alignItems: "center", gap: "0.5rem" }}>

                                        STATUS
                                        <Box sx={{ display: 'flex', flexDirection: "column", marginTop: "0.4rem", justifyContent: "center" }}>
                                            <ArrowDropUpOutlinedIcon sx={{ ...sortStyle, color: sortStatus === "a" ? "#71953E" : "" }} onClick={() => {

                                                setSortStatus("a")
                                                sortData("a")
                                            }} />
                                            <ArrowDropDownOutlinedIcon sx={{ ...sortStyle, color: sortStatus === "d" ? "#71953E" : "" }} onClick={() => {

                                                setSortStatus("d")
                                                sortData("d")
                                            }} />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>PRICE</TableCell>
                                <TableCell>SOC</TableCell>
                                <TableCell>LAST CHECKUP</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                EpackData?.length > 0 ?
                                    <>
                                        {
                                            sortedData?.map((epack, index) => {
                                                return (
                                                    <TableRow key={epack?.id} className='row_table' onClick={() => navigate("/actual-Status/epack")}>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                {epack?.name}
                                                            </Typography>
                                                            <Typography variant='body1' textAlign="left">
                                                                ID {epack?.nameId}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left"
                                                                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                                <img src={UbuildingIcon} alt="station" />
                                                                {epack?.location}
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left" paddingLeft="1.4rem">
                                                                {epack?.locationSpot}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                {epack?.connection}
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left">
                                                                {epack?.pulgs}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Stack direction="row" sx={{
                                                                background: getStausBackgroundActualStausById(epack?.id),
                                                                padding: "0.3rem 0.3rem",
                                                                borderRadius: "2px"
                                                            }} alignItems="center"
                                                                gap="0.5rem"
                                                                justifyContent="center"
                                                            >
                                                                <Box width="7px" height="7px" borderRadius="50%" backgroundColor={getStausCircleActualStausById(epack?.id)}></Box>
                                                                <Typography >{epack?.status}</Typography>
                                                            </Stack>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                {epack?.price}
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left">
                                                                {epack?.priceStatus}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                {epack?.soc}
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left">
                                                                {epack?.socP}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' >
                                                                {epack?.lastCheckup}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <TableRow>
                                        <TableCell colSpan={11}>No Data</TableCell>
                                    </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ paddingTop: "1rem" }}>
                <Typography variant='h4' component="h4">
                    Ev Charger
                </Typography>
                <TableContainer component={Paper} sx={{ background: "#f9f9f9", marginTop: "1rem" }} >
                    <Table className='register_table'>
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
                                <TableCell>LOCATION</TableCell>
                                <TableCell>CONNECTIONS</TableCell>
                                <TableCell>STATUS</TableCell>
                                <TableCell>SELLING PRICE</TableCell>
                                <TableCell>24H SOLD</TableCell>
                                <TableCell>LAST CHECKUP</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                [1, 2, 3]?.length > 0 ?
                                    <>
                                        {
                                            [1, 2, 3].map((item, index) => {
                                                return (
                                                    <TableRow key={""} className='row_table' onClick={() => navigate("/actual-Status/echarger")} >
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                Tesla
                                                            </Typography>
                                                            <Typography variant='body1' textAlign="left">
                                                                ID 187 34
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                24-Autohof Lutterberg
                                                            </Typography>
                                                            <Typography variant='body1' textAlign="left">
                                                                Triftstraße 11, 34355 Staufenberg
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left" >
                                                                SELLING POINT
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left"
                                                                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                                                            >
                                                                <img src={UbuildingIcon} alt="build" />
                                                                24-Autohof Lutterberg
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left"
                                                                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                                                            >
                                                                <img src={UbuildingIcon} alt="build" />
                                                                1/2 plugs
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Stack direction="row" sx={{
                                                                background: getStausBackgroundActualStausById(index),
                                                                padding: "0.3rem 0.3rem",
                                                                borderRadius: "2px"
                                                            }} alignItems="center"
                                                                gap="0.5rem"
                                                                justifyContent="center"
                                                            >
                                                                <Box width="7px" height="7px" borderRadius="50%" backgroundColor={getStausCircleActualStausById(index)}></Box>
                                                                <Typography >Stand by</Typography>
                                                            </Stack>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                010€/kWh
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left">
                                                                SELL
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                5.4kWh
                                                            </Typography>

                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' >
                                                                18.03, 13:28
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <TableRow>
                                        <TableCell colSpan={11}>No Data</TableCell>
                                    </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ paddingTop: "1rem" }}>
                <Typography variant='h4' component="h4">
                    E Source
                </Typography>
                <TableContainer component={Paper} sx={{ background: "#f9f9f9", marginTop: "1rem" }} >
                    <Table className='register_table'>
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>

                                <TableCell>CONNECTIONS</TableCell>
                                <TableCell>ISLAND  OP.</TableCell>
                                <TableCell>PRICE</TableCell>
                                <TableCell>AVAILABLE</TableCell>
                                <TableCell>STATUS</TableCell>
                                <TableCell>SOC E-PACK</TableCell>
                                <TableCell>ETR</TableCell>
                                <TableCell>CHECKUP</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                [1, 2, 3]?.length > 0 ?
                                    <>
                                        {
                                            [1, 2, 3].map((item, index) => {
                                                return (
                                                    <TableRow key={""} className='row_table' onClick={() => navigate("/actual-Status/esource")}>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                Bürgersolarpark Schauenburg (PV)
                                                            </Typography>
                                                            {/* <Typography variant='body1' textAlign="left">
                                                                ID 187 34
                                                            </Typography> */}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left"
                                                                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                                                            >
                                                                <img src={UbuildingIcon} alt="build" />
                                                                24-Autohof Lutterberg
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left"
                                                                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                                                            >
                                                                <img src={UbuildingIcon} alt="build" />
                                                                1/2 plugs
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                on
                                                            </Typography>

                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                0,12€/kWh
                                                            </Typography>

                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                242.1kWh
                                                            </Typography>

                                                        </TableCell>
                                                        <TableCell>
                                                            <Stack direction="row" sx={{
                                                                background: getStausBackgroundActualStausById(index),
                                                                padding: "0.3rem 0.3rem",
                                                                borderRadius: "2px"
                                                            }} alignItems="center"
                                                                gap="0.5rem"
                                                                justifyContent="center"
                                                            >
                                                                <Box width="7px" height="7px" borderRadius="50%" backgroundColor={getStausCircleActualStausById(index)}></Box>
                                                                <Typography >Stand by</Typography>
                                                            </Stack>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                6.1kWh
                                                            </Typography>
                                                            <Typography variant='body2' textAlign="left">
                                                                5% Charged
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' textAlign="left">
                                                                120 min.to 100%SOC
                                                            </Typography>

                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant='body1' >
                                                                18.03, 13:28
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <TableRow>
                                        <TableCell colSpan={11}>No Data</TableCell>
                                    </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default ActualStatus