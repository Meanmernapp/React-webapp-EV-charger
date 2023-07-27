import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Switch, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import "./ChargerStatus.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import trashcan from '../../assets/Icons/Vectortrash.svg';
import DatePicker from 'react-datepicker'
import redplug from './../../assets/Icons/Frame 44redVector.svg';
import greenplug from './../../assets/Icons/Frame 45.svg';
import moment from 'moment'

const ITEMS_PER_PAGE = 5;
const ChargerStatus = () => {

  const [chargeAvalable, setChargeAvailble] = useState([
    { id: 1, date: 'Monday 4th, 12:00 am', checked: false },
    { id: 2, date: 'Tuesday 5th, 12:00 am', checked: false },
    { id: 3, date: 'Wednesday 6th, 12:00 am', checked: true },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [wrongSomeThing , setWrongSomeThing] = useState(false)


  const handleAddDateClick = () => {
    setShowDatePicker(true);
  };

  //  hande date add 
  const handleDateChange = (date) => {
    if (!moment(date).isValid()) {
      console.error('Invalid date format:', date);
      return;
    }
      
      const newDate = moment(date).format('dddd Do, h:mm a');
      setSelectedDate(newDate);
      const addItem = { id: chargeAvalable?.length + 1, date: newDate, checked: true };
      const updatedItems = chargeAvalable.map((item) => ({
        ...item,
        checked: false,
      }));
      
    setChargeAvailble([...updatedItems, addItem]);
    setShowDatePicker(false);
    
  };

  // pagination
  const handleChangePage = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  // transform data for pagination
  const paginatedData = chargeAvalable?.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // checkbox 
  const handleChangeCheckBox = useCallback(
    (itemId) => (event) => {
     
      const updatedItems = chargeAvalable.map((item) => {
        if (item.id === itemId) {
          setSelectedDate(event.target.checked ? item.date : null);
        }
        return item.id === itemId ? { ...item, checked: event.target.checked } : { ...item, checked: false }
      });
      setChargeAvailble(updatedItems);
    },
    [chargeAvalable]
  );


  // delete date avalability
  const handleDelete = (itemId) => {
    const updatedItems = chargeAvalable.filter((item) => item.id !== itemId);
    setChargeAvailble(updatedItems);
  };

  //first time to check date avalaibility
  useEffect(()=>{
          chargeAvalable.map(item =>{
             if(item.checked){
              setSelectedDate(item?.date)
             }
          })
  },[])
  return (
    <Stack padding="1rem">
      <Typography variant='h1' component="h1">
        Ev-Charger Status
      </Typography>

      <Grid container spacing={2} paddingTop="1rem">
        <Grid item xs={12} sm={5} md={5} lg={5} >
          <Stack className='ev_charger_avalability'>
            <Typography variant='h2' component="h2">
              Next Availability
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: "2rem" }}>
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
                  currentPage === Math.floor(chargeAvalable?.length / ITEMS_PER_PAGE) ?
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

            <Box sx={{ paddingTop: '1rem', height:"380px" }}>
              {
                paginatedData?.map(item => {
                  return (
                    <Grid container spacing={2} key={item?.id}
                      sx={{
                        paddingTop: "1rem",
                        borderBottom: "1px solid #D1D1D1",
                        paddingBottom: "1rem"
                      }}
                    >

                      <Grid item xs={5} sm={5} md={5} lg={5}>
                        <Typography variant='body1' >
                          {item?.date}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} >
                        <FormControlLabel
                          control={<Switch
                            checked={item?.checked}
                            onChange={handleChangeCheckBox(item?.id)}


                          />}
                          labelPlacement="end"
                          label={item?.checked ? "Showing this Date" : "Not Showing"}
                          className='switch_lable'
                        />
                      </Grid>
                      <Grid item xs={1} sm={1} md={1} lg={1}>
                        <img className='delete_img' src={trashcan} alt="delete" width="18.73px" height="20px"
                          onClick={() => handleDelete(item?.id)}
                        />
                      </Grid>

                    </Grid>
                  )
                })
              }
            </Box>

            <Stack sx={{ paddingTop: "2rem" }} direction="row" gap="1rem">
              <Typography variant='body1' sx={{ color: "#74993F", cursor: "pointer" }}
                fontWeight="bold" onClick={() => handleAddDateClick()}>
                + Add date..
              </Typography>
              {showDatePicker && (
                <DatePicker
                  // selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  open
                  dateFormat="Pp"
                  popperPlacement="bottom"
                />
              )}
            
            </Stack>
            <Box sx={{ paddingTop: "2rem" }}>
              <Typography variant='h2' component="h2" sx={{ color: "#FF7246" }}>
                Something went wrong?
              </Typography>
              <Stack direction="row" alignItems="center" >
                <Checkbox  value={wrongSomeThing} onChange={(e)=> setWrongSomeThing(e.target.checked)}/>
                <Typography variant='body1' >
                  Show charger as not available
                </Typography>
              </Stack>
              <Stack className='btn_footer'>
                <Button
                  variant='outlined'
                  className='cancel'>cancel</Button>
                <Button className='update'>
                  Update status
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Stack className='ev_charger_kwh' sx={{ backgroundColor: !selectedDate &&  !wrongSomeThing ? "" : "#FF7246" }}>
            {
              !selectedDate && !wrongSomeThing &&
              <>
                <Typography variant='h2' component="h2" sx={{ color: "#4E672A" }}>
                  EV-Charger Thomas is
                </Typography>
                <Typography variant='h2' component="h2">
                  currently in operation.
                </Typography>
                <Typography variant='h3' component="h3" sx={{ color: "#4E672A" }}>
                  ENERGY AVAILABLE
                </Typography>

                <Box className="energy_availble_box">

                  <Typography variant='h1' component="h1" >
                    300KWh*
                  </Typography>
                </Box>
                <Typography variant='body1' textAlign="center" sx={{ color: "#4E672A", width: "338px" }}>
                  *Amount of energy available until E-pack (Energy Storage System) needs to be swapped. Learn more about our operations in our FAQ section.
                </Typography>
                <Typography variant='h3' component="h3" sx={{ color: "#4E672A", paddingTop: "1rem" }}>
                  PLUGS AVAILABLE
                </Typography>
                <Box className="plug_availbele_container">
                  <Stack className='plug_available_card'>
                    <img src={redplug} alt="plugs" />
                    <Typography variant='body1' sx={{ color: "#FF7246", paddingTop: "0.3rem" }}>
                      Occupied
                    </Typography>
                    <Typography variant='h4' component="h4" paddingTop="0.3rem">
                      COMBO CCS2 EU
                    </Typography>
                    <Typography variant='body1' paddingTop="0.3rem" >
                      150kW/ DC
                    </Typography>

                  </Stack>
                  <Stack className='plug_available_card'>
                    <img src={greenplug} alt="plugs" />
                    <Typography variant='body1' sx={{ color: "#4E672A", paddingTop: "0.3rem" }}>
                      Available
                    </Typography>
                    <Typography variant='h4' component="h4" paddingTop="0.3rem">
                      COMBO CCS2 EU
                    </Typography>
                    <Typography variant='body1' paddingTop="0.3rem" >
                      150kW/ DC
                    </Typography>

                  </Stack>

                </Box>


              </>
            }
            {selectedDate && !wrongSomeThing &&
              <Box sx={{ width: "496px" }}>
                <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }}>
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
                    <Typography variant='h2' component="h2" textAlign="center" >
                      {selectedDate}
                    </Typography>
                  </Box>
                </Stack>

              </Box>
            }

            {
              wrongSomeThing &&
              <>
              

               <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }}>
               EV-Charger Thomas is 
                </Typography>
                <Typography variant='h2' component="h2">
                currently not available.
                </Typography>
                <Typography variant='h2' component="h2" sx={{ color: "#ffffff" }}>
                We are working on it.
                </Typography>
              </>
            }
          </Stack>
        </Grid>

      </Grid>
    </Stack>
  )
}

export default ChargerStatus
