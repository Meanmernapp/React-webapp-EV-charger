import "./RegisteredUsers.scss";
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import RegisterUserTable from './component/RegisterUserTable';
import SearchField from '../../components/SearchField';

const RegisteredUsers = () => {
  const data = [
    {
      col1: 'Sheraz',
      col2: 'hussan',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '123 456 7',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
    {
      col1: 'ahmed',
      col2: 'hussan',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '123 456 7',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
    {
      col1: 'Fateh',
      col2: 'jusufi',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '123123',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
    {
      col1: 'Dainana',
      col2: 'hussan',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '1234',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
    {
      col1: 'Sheraz',
      col2: 'hussan',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '123 456 7',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
    {
      col1: 'Sheraz',
      col2: 'hussan',
      col3: 'email@gmail.com',
      col4: 'Wed 14 Jun, 13.30hs',
      col5: 'No',
      col6: '123 456 7',
      col7: 'Yes',
      col8: '12/06/23',
      col9: 'Yes',
      col10: 'No',
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

    // Filter the data based on the search term if it exists
    const filteredData = searchTerm
    ? data.filter(
        (row) =>
          row.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.col6.includes(searchTerm)
      )
    : data;
  return (
    <Stack padding="1rem" >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant='h1' component="h1">
          Registered User
        </Typography>
        <Box>
          <SearchField
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={"Name or RFID Number"}
            bgColor={"#ffffff"} />
        </Box>
      </Stack>
      <Box sx={{ paddingTop: "1rem" }}>
        <RegisterUserTable data={filteredData} />
      </Box>
    </Stack>
  )
}

export default RegisteredUsers