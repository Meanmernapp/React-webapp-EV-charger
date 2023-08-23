import "./RegisteredUsers.scss";
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import RegisterUserTable from './component/RegisterUserTable';
import SearchField from '../../components/SearchField';
import { useSelector } from "react-redux";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const RegisteredUsers = () => {
  const isSmallerScreen = useMediaQuery((theme => theme.breakpoints.down('sm')))
  // useSelector
  const { getPliotUser, getHistroyUser } = useSelector(state => state.ChargingStationSlice)

  // const data = [
  //   {
  //     col1: 'Sheraz',
  //     col2: 'hussan',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '123 456 7',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  //   {
  //     col1: 'ahmed',
  //     col2: 'hussan',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '123 456 7',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  //   {
  //     col1: 'Fateh',
  //     col2: 'jusufi',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '123123',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  //   {
  //     col1: 'Dainana',
  //     col2: 'hussan',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '1234',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  //   {
  //     col1: 'Sheraz',
  //     col2: 'hussan',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '123 456 7',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  //   {
  //     col1: 'Sheraz',
  //     col2: 'hussan',
  //     col3: 'email@gmail.com',
  //     col4: 'Wed 14 Jun, 13.30hs',
  //     col5: 'No',
  //     col6: '123 456 7',
  //     col7: 'Yes',
  //     col8: '12/06/23',
  //     col9: 'Yes',
  //     col10: 'No',
  //   },
  // ];
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = React.useState('1');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // Filter the data based on the search term if it exists
  const filteredData = searchTerm
    ? getPliotUser.filter(
      (row) =>
        row?.first_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        row?.rf_id_number?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
    : getPliotUser;


  const filteredDataHistory = searchTerm
    ? getHistroyUser?.filter(
    (row) =>
      row?.first_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      row?.rf_id_number?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  )
: getHistroyUser
  return (
    <Stack padding="1rem" >
      <Grid container >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography variant='h1' component="h1">
            {value === "1" ? "Register User" :'History User'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{
            width: isSmallerScreen ? "100%" : "278px",
            paddingTop: isSmallerScreen ? "1rem" : ""
          }}>
            <SearchField
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={"Name or RFID Number"}
              bgColor={"#ffffff"} />
          </Box>
        </Grid>


      </Grid>
      <Box sx={{ paddingTop: "1rem" }}>

        <Box sx={{ width: '100%', typography: 'body1' }} className="tab_list" >
          <TabContext value={value}  >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Register User" value="1" />
                <Tab label="History User" value="2" />

              </TabList>
            </Box>
            <TabPanel value="1">
              <RegisterUserTable data={filteredData}  tableType={"edit"} />
            </TabPanel>
            <TabPanel value="2">
              <RegisterUserTable data={filteredDataHistory} tableType={"no_edit"} />
            </TabPanel>

          </TabContext>
        </Box>
      </Box>
    </Stack>
  )
}

export default RegisteredUsers