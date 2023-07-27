import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Box, IconButton, Typography } from '@mui/material';
import pencil from '../../../assets/Icons/Vectorpencil.svg';
import trashcan from '../../../assets/Icons/Vectortrash.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TableMui = ({ data, searchTerm }) => {

  const itemsPerPage = 5;
  const [page, setPage] = useState(0);

  // handel page pagination
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // pagination varialble
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //  Api Data transformation
  const visibleData = data?.slice(startIndex, endIndex);
  return (
    <>
      <TableContainer component={Paper} sx={{ background: "#ffffff" }}>
        <Table className='register_table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>PickUp/Renewal Time</TableCell>
              <TableCell>Renewal</TableCell>
              <TableCell>RFID Number</TableCell>
              <TableCell>Newsletter</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Confirmed</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map((row, index) => (
              <TableRow key={index} className='row_table' >
                <TableCell>{row.col1}</TableCell>
                <TableCell>{row.col2}</TableCell>
                <TableCell>{row.col3}</TableCell>
                <TableCell>{row.col4}</TableCell>
                <TableCell>{row.col5}</TableCell>
                <TableCell>{row.col6}</TableCell>
                <TableCell>{row.col7}</TableCell>
                <TableCell>{row.col8}</TableCell>
                <TableCell>{row.col9}</TableCell>
                <TableCell>{row.col10}</TableCell>
                <TableCell>
                  <Stack direction="row" gap="1rem">
                    <img src={pencil} alt="pincil" />
                    <img src={trashcan} alt="pincil" />
                  </Stack>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ color: "#8D8D8D", cursor: "pointer" }}
          onClick={() => page === 0 ? "": handleChangePage(page - 1)}
         
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
          onClick={() => page === pageCount - 1 ? "": handleChangePage(page + 1)}
          
        >
          <Typography variant='body1' >
            Next 5
          </Typography>
          <ArrowForwardIcon fontSize='14px' />
        </Stack>
      </Box>
    </>
  );
};

export default TableMui;
