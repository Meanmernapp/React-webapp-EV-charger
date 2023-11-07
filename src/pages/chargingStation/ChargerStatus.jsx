import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Switch, Typography, useMediaQuery } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import "./ChargerStatus.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import trashcan from '../../assets/Icons/Vectortrash.svg';
import redplug from './../../assets/Icons/Frame44redVector.svg';
import greenplug from './../../assets/Icons/Frame45.svg';
import DatePicker from 'react-datepicker'
import warningIcon from '../../assets/warningSign.png'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { CreateBatteryAvailables, DeleteBatteryAvailables, UpdateBatteryAvailable, UpdateChargingStatus } from '../../services/chargingStation/ChargingStationsApi';
import BatteryStatus from './component/BatteryStatus';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ConfirmationModal from '../../components/ConfirmationModal';
import FiPowerIcon from '../../assets/common/fipower.svg'

const ITEMS_PER_PAGE = 5;
// charging status
const ChargerStatus = () => {

  const isSmallerScreen = useMediaQuery((theme => theme.breakpoints.down('sm')))
  const dispatch = useDispatch()
  // useSelector
  const { getChargingStatus, getBatteryAvailables, updateBatteryAvailables, createBatteryAvailable,
    getBatteryPercentage, getConnectorStatus, deleteBatteryAvailables } = useSelector(state => state.ChargingStationSlice)
  // useState
  const [currentPage, setCurrentPage] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [wrongSomeThing, setWrongSomeThing] = useState(false)
  const [updateDate, setUpdateDate] = useState({});
  const [paginatedData, setPaginatedData] = useState([]);
  const [addDateTime, setAddDateTime] = useState("")
  const [deleteBattery, setDeleteBattery] = useState(false)
  const [batteryId, setBatteryId] = useState("")
  const [isTurnOn, setIsTurnOn] = useState(false)
  const [turnOnDc, setTurnOnDc] = useState(false)
  const [dcRequlation, setDcRequlation] = useState(false)
  const [batteryTurnOn, setBatteryTurnOn] = useState(false)

  const batteryValue = getBatteryPercentage?.batteryPercentage / 100 * 220

  // funtions
  //turn on or off dc requlation
  const toggelDcMode = () => {
    setDcRequlation(!dcRequlation)
    setTurnOnDc(false)
  }
  //turn battery on or off
  const toggelBatteryMode = () => {
    setBatteryTurnOn(!batteryTurnOn)
    setIsTurnOn(false)
  }
  // delete battery
  const handleDelete = () => {
    dispatch(DeleteBatteryAvailables(batteryId))
    setDeleteBattery(false)
  }

  const handleAddDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  //  hande date add 
  const handleDateChange = (date) => {

    if (!moment(date).isValid()) {
      toast.error('Invalid date format:', date?.$d);
      return;
    }

    const newDate = moment(date?.$d).format('YYYY-MM-DDTHH:mm:ss[Z]');

    const data = {
      date_time: newDate,
      validity: false
    }

    setAddDateTime(newDate)
  };

  const updateDateValue = (fieldName, newValue, id) => {
    // Update the state based on the field name
    setUpdateDate((prevFieldValues) => ({
      ...prevFieldValues,
      [fieldName]: newValue,
    }));
  };

  // handle update date
  const handleDateChangeUpdate = (date, id) => {

    // Update the state with the selected date for the specific row
    const newDate = moment(date?.$d).format('YYYY-MM-DDTHH:mm:ss[Z]');
    updateDateValue(`updateDate_${id}`, newDate, id);
  }

  // pagination
  const handleChangePage = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  const handleChangeCheckBox = (itemId, dateItem) => (event) => {

    // Call the API to update the status
    const data = {

      date_time: updateDate[`updateDate_${itemId}`] ? updateDate[`updateDate_${itemId}`] : dateItem,
      validity: event.target.checked,
    };

    dispatch(UpdateBatteryAvailable({ data, id: itemId }));
  };

  // handle update status
  const handleUpdateStatus = () => {
    const data = {
      status: wrongSomeThing
    }
    dispatch(UpdateChargingStatus(data))
  }

  useEffect(() => {
    // First, make a copy of the original array to avoid modifying it directly
    const sortedData = [...getBatteryAvailables];

    // Then, sort the copied array by the 'date' property in ascending order
    sortedData.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));

    // Finally, perform the pagination
    const paginatedData = sortedData.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    );

    // Set the paginatedData to the state variable
    setPaginatedData(paginatedData);
  }, [getBatteryAvailables, currentPage, updateBatteryAvailables]);
  //first time to check date avalaibility
  useEffect(() => {

    if (getBatteryAvailables?.length > 0) {
      let foundValidItem = false;

      getBatteryAvailables.forEach(item => {
        if (item.validity && !foundValidItem) {
          setSelectedDate(item?.date_time);
          foundValidItem = true;
        }
      });

      if (!foundValidItem) {
        setSelectedDate(null);
      }
    } else {
      setSelectedDate(null);
    }

  }, [getBatteryAvailables, updateBatteryAvailables, deleteBatteryAvailables])

  useEffect(() => {
    setWrongSomeThing(getChargingStatus?.status)
  }, [getChargingStatus])
  return (
    <>
      <Stack padding="1rem">
        <Typography variant='h1' component="h1">
          Ev-Charger Status
        </Typography>

        <Grid container spacing={2} paddingTop="1rem">
          <Grid item xs={12} sm={5} md={5} lg={5} >
            <Stack className='ev_charger_avalability' sx={{ height: isSmallerScreen ? "auto" : "727px" }}>
              <Typography variant='h2' component="h2">
                Next Availability
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: "1rem" }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: "#8D8D8D", cursor: "pointer" }}
                  onClick={() => {
                    currentPage === 0 ? "" :
                      handleChangePage(currentPage - 1)
                  }
                  }
                >
                  <ArrowBackIcon fontSize='14px' />
                  <Typography variant='body1'>
                    Previous 5
                  </Typography>
                </Stack>
                {/* <Box>{`Showing ${startIndex + 1} - ${endIndex} of ${data.length}`}</Box> */}
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ color: "#8D8D8D", cursor: "pointer" }}
                  onClick={() => {
                    currentPage === Math.floor(getBatteryAvailables?.length / ITEMS_PER_PAGE) ?
                      "" :
                      handleChangePage(currentPage + 1)
                  }}

                >
                  <Typography variant='body1' >
                    Next 5
                  </Typography>
                  <ArrowForwardIcon fontSize='14px' />
                </Stack>
              </Box>

              <Box sx={{ paddingTop: '0.5rem', height: "324px" }}>
                {
                  getBatteryAvailables?.length > 0 ?
                    <>
                      {
                        paginatedData?.map(item => {
                          return (
                            <Grid container spacing={2} key={item?.id}
                              className='battery_availability'
                              alignItems="center"
                              sx={{
                                paddingTop: "0.25rem",
                                borderBottom: "1px solid #D1D1D1",
                                paddingBottom: "0.5rem"
                              }}
                            >

                              <Grid item xs={8} sm={8} md={8} lg={8}>
                                {/* <Typography variant='body1' > */}
                                {/* {item?.date_time} */}
                                {/* <DatePicker
                                onChange={(date) => handleDateChangeUpdate(date, item?.id)}
                                value={updateDate[`updateDate_${item?.id}`] || item?.date_time || null}

                                showTimeSelect
                                dateFormat="Pp"
                                popperPlacement="bottom"
                                minDate={new Date()}
                              /> */}
                                {/* </Typography> */}
                                <Box sx={{ width: "100%" }}>
                                  <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>

                                      <DateTimePicker
                                        disablePast={true}

                                        format={"YYYY/MM/DD, HH:mm"}
                                        // value={updateDate[`updateDate_${item?.id}`] || item?.date_time || null}
                                        // label="Date And time"
                                        value={dayjs(item?.date_time)}
                                        closeOnSelect={true}
                                        onChange={(date) => handleDateChangeUpdate(date, item?.id)}

                                      />
                                    </DemoContainer>
                                  </LocalizationProvider>
                                </Box>

                              </Grid>
                              <Grid item xs={3} sm={3} md={3} lg={3} >
                                <FormControlLabel
                                  control={<Switch
                                    value={item?.validity ? true : false}
                                    checked={item?.validity ? true : false}
                                    onChange={handleChangeCheckBox(item?.id, item?.date_time)}


                                  />}
                                  labelPlacement="end"
                                  // label={item?.validity ? "Showing this Date" : ""}
                                  className='switch_lable'
                                />
                              </Grid>
                              <Grid item xs={1} sm={1} md={1} lg={1}>
                                <img className='delete_img' src={trashcan} alt="delete" width="18.73px" height="20px"
                                  onClick={() => {
                                    setBatteryId(item?.id)
                                    setDeleteBattery(true)
                                  }}
                                />
                              </Grid>

                            </Grid>
                          )
                        })
                      }
                    </> : <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "100%" }}>
                      No Availability Found, Try Add date
                    </Box>
                }
              </Box>

              <Stack sx={{ paddingTop: "1rem" }} direction="row" gap="1rem" alignItems="center" className='battery_avaliability'>
                <Typography variant='body1' sx={{ color: showDatePicker ? "#FF7246" : "#74993F", cursor: "pointer" }}
                  fontWeight="bold" onClick={() => handleAddDateClick()}>

                  {
                    showDatePicker ? "X Cancel" : "+ Add date.."
                  }
                </Typography>
                {showDatePicker &&
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>

                      <DateTimePicker
                        disablePast={true}
                        // label="Date And time"
                        open={true}
                        ampm={false}
                        format={"YYYY/MM/DD, HH:mm"}
                        onAccept={() => {
                          const data = {
                            date_time: addDateTime,
                            validity: false
                          }
                          dispatch(CreateBatteryAvailables(data))
                          setShowDatePicker(false)
                        }}
                        closeOnSelect={true}
                        onClose={() => {
                          setAddDateTime(null)
                        }}
                        onChange={handleDateChange}


                      />
                    </DemoContainer>
                  </LocalizationProvider>
                }
              </Stack>
              <Box >
                {/* <Typography variant={isSmallerScreen ? "h3" : "h2"} className='change_size' component="h2" sx={{ color: "#FF7246" }}>
                  Something went wrong?
                </Typography> */}
                <Stack direction="row" alignItems="center" >
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': {
                        color: '#BADA55',
                      }
                    }}
                    checked={wrongSomeThing ? true : false}
                    onChange={(e) => setWrongSomeThing(e.target.checked)} />
                  <Typography variant='body1' >
                    Show charger as not available
                  </Typography>
                </Stack>
                <Stack className='btn_footer'>
                  {/* <Button
                    variant='outlined'
                    className='cancel'>cancel</Button> */}
                  <Button className='update' onClick={() => { handleUpdateStatus() }}>
                    Update status
                  </Button>
                </Stack>
              </Box>
              <Box className="e_pack_control">

                <Typography variant='h2' component="h2">
                  E-Pack control
                </Typography>
                <Box className='working_mode'>
                  <Typography variant='body1' component="body1">
                    Working Mode
                  </Typography>
                  <Box className="switch_box" onClick={() => setTurnOnDc(true)}>
                    <Typography variant='body1' component="body1" className={!dcRequlation ? 'turn_off_dc' : "padd"}>
                      PQ
                    </Typography>
                    <Typography variant='body1' component="body1" className={dcRequlation ? 'turn_on_dc' : ""}>
                      DC Voltage Regulation
                    </Typography>

                  </Box>

                </Box>

                {
                  !batteryTurnOn &&
                  <Box className="btn_container">
                    <Button className='shut_down' onClick={() => setIsTurnOn(true)}>
                      Turn Off
                      <img src={FiPowerIcon} alt="fi_power" />
                    </Button>
                  </Box>
                }
                {
                  batteryTurnOn &&
                  <Box className="btn_container">
                    <Button className='trun_on' onClick={() => setIsTurnOn(true)}>
                      Turn On
                      <img src={FiPowerIcon} alt="fi_power" />
                    </Button>
                  </Box>
                }
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <Stack className='ev_charger_kwh' sx={{ backgroundColor: !selectedDate && !wrongSomeThing ? "" : "#FF7246" }}>
              {
                !selectedDate && !wrongSomeThing &&
                <>
                  <Typography variant={isSmallerScreen ? "h3" : "h2"} component="h2" textAlign="center" sx={{ color: "#4E672A" }}>
                    EV-Charger Thomas is
                  </Typography>
                  <Typography variant={isSmallerScreen ? "h3" : "h2"} component="h2" textAlign="center">
                    currently in operation.
                  </Typography>
                  <Typography variant='h3' component="h3" sx={{ color: "#4E672A" }} textAlign="center">
                    ENERGY AVAILABLE
                  </Typography>
                  <BatteryStatus batteryPercentage={getBatteryPercentage?.batteryPercentage} batteryValue={batteryValue} data={getBatteryPercentage} />
                  <Typography variant='body1' textAlign="center" sx={{ color: "#4E672A", width: "338px" }}>
                    *Amount of energy available until E-pack (Energy Storage System) needs to be swapped. Learn more about our operations in our FAQ section.
                  </Typography>
                  <Typography variant='h3' component="h3" sx={{ color: "#4E672A", paddingTop: "0.5rem" }}>
                    PLUGS AVAILABLE
                  </Typography>
                  <Grid container spacing={2} className="plug_availbele_container">
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{
                      display: "flex", alignItems: "center",
                      justifyContent: isSmallerScreen ? "center" : "flex-end"
                    }}>
                      <Stack className='plug_available_card'>
                        <img src={
                          getConnectorStatus?.connectorZero?.status === "Unavailable" ? redplug : greenplug} alt="plugs" />
                        <Typography variant='body1' sx={{
                          color:
                            getConnectorStatus?.connectorZero?.status === "Unavailable" ? "#FF7246" : "#4E672A", paddingTop: "0.3rem"
                        }}>

                          {getConnectorStatus?.connectorZero?.status}
                        </Typography>
                        <Typography variant='h4' component="h4" paddingTop="0.3rem">
                          COMBO CCS2 EU
                        </Typography>
                        <Typography variant='body1' paddingTop="0.3rem" >
                          150kW/ DC
                        </Typography>

                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{
                      display: "flex", alignItems: "center",
                      justifyContent: isSmallerScreen ? "center" : "flex-start"
                    }}>
                      <Stack className='plug_available_card'>
                        <img src={
                          getConnectorStatus?.connectorZero?.status === "Unavailable" ? redplug : greenplug
                        } alt="plugs" />
                        <Typography variant='body1' sx={{
                          color:
                            getConnectorStatus?.connectorZero?.status === "Unavailable" ? "#FF7246" : "#4E672A", paddingTop: "0.3rem"
                        }}>
                          {getConnectorStatus?.connectorZero?.status}
                        </Typography>
                        <Typography variant='h4' component="h4" paddingTop="0.3rem">
                          COMBO CCS2 EU
                        </Typography>
                        <Typography variant='body1' paddingTop="0.3rem" >
                          150kW/ DC
                        </Typography>

                      </Stack>
                    </Grid>



                  </Grid>


                </>
              }
              {selectedDate && !wrongSomeThing &&
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }} textAlign="center">
                    EV-Charger Thomas is waiting for its E-Pack Edison. E-Pack Edison
                  </Typography>
                  <Typography variant='h2' component="h2" textAlign="center" >
                    is currently recharging
                  </Typography>
                  <Typography variant='h2' component="h2" textAlign="center" sx={{ color: "#ffffff" }}>
                    at the solar park.
                  </Typography>

                  <Typography variant='body1' textAlign="center" paddingTop="2rem" fontWeight="bold">
                    EV-Charger next available on
                  </Typography>

                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <Box className="available_data">
                      <Typography variant={isSmallerScreen ? "h4" : "h2"} component="h2" textAlign="center"  >
                        {
                          // selectedDate 
                          moment(selectedDate).format('DD/MM/YYYY, HH:mm')
                        }
                      </Typography>
                    </Box>
                  </Stack>

                </Box>
              }

              {
                wrongSomeThing &&
                <>


                  <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }} textAlign="center">
                    EV-Charger Thomas is
                  </Typography>
                  <Typography variant='h2' component="h2" textAlign="center">
                    currently not available.
                  </Typography>
                  <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }} textAlign="center">
                    We are working on it.
                  </Typography>
                </>
              }
            </Stack>
          </Grid>

        </Grid>
      </Stack>

      <ConfirmationModal
        confirmationMessage='Do you want to Delete It?'
        onClose={() => setDeleteBattery(false)}
        onConfirm={handleDelete}
        open={deleteBattery}
        colorCode="#FF553E"
        confirm="confirm"
      />

      <ConfirmationModal
        confirmationMessage='You are shutting down the E-Pack.'
        onClose={() => setIsTurnOn(false)}
        onConfirm={toggelBatteryMode}
        open={isTurnOn}
        colorCode="#FF553E"
        confirm="I am sure, turn it off"
      />


      <ConfirmationModal
        confirmationMessage='You are switching to DC voltage regulation Mode.'
        onClose={() => setTurnOnDc(false)}
        onConfirm={toggelDcMode}
        open={turnOnDc}
        colorCode="#71953E"
        confirm="i am sure"
      />
    </>
  )
}

export default ChargerStatus
