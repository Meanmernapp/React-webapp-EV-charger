import React, { useEffect, useMemo, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Box, IconButton, Typography, TextField, Button } from '@mui/material';
import pencil from '../../../assets/Icons/Vectorpencil.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker'
import moment from 'moment';
import { toast } from 'react-toastify'
import { UpdatePliotUser } from '../../../services/chargingStation/ChargingStationsApi';
import ConfirmationModal from '../../../components/ConfirmationModal';
import { getRenewalTimeById } from '../../../utils/getRenewalTimeById';


const TableMui = ({ data, tableType }) => {

  const dispatch = useDispatch();
  const itemsPerPage = 5;
  const [page, setPage] = useState(0);
  const [fieldValues, setFieldValues] = useState({});
  const [renew, setRenew] = useState(false)
  const [renewId, setRenewId] = useState("")


  // pagination varialble
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // handel page pagination
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // handel changes fields
  const handleFieldChange = (fieldName, newValue, id) => {
    // Update the state based on the field name

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [fieldName]: newValue,
    }));
  };
  // handel renew
  const handleRenew = () => {
    const data = {
      renewal: true
    }
    dispatch(UpdatePliotUser({ data, id: renewId }))
    setRenew(false)

  }
  // handle change date 
  const handleDatePickerChange = (date, id) => {
    // Update the state with the selected date for the specific row
    const newDate = moment(date).format('YYYY-MM-DDTHH:mm:ssZ')
    handleFieldChange(`pickup_${id}`, newDate, id);
  };

  //  Api Data transformation
  const visibleData = data?.slice(startIndex, endIndex);

  const handleUpdateTable = (id, item) => {

    const data = {
      rf_id_pick_date: fieldValues[`pickup_${id}`],
      rf_id_number: fieldValues[`rfid_${id}`]

    }
    dispatch(UpdatePliotUser({ data, id }))


  }
  // fill default data from api to fields
  useEffect(() => {
    // Process the API data and create a mapping of field values
    const initialFieldValues = {};
    data.forEach((item) => {
      initialFieldValues[`rfid_${item?.id}`] = item?.rf_id_number || ""
      initialFieldValues[`pick_up${item?.id}`] = item?.rf_id_pick_date || ""

    });
    // Set the initial state with the mapping
    setFieldValues(initialFieldValues);
  }, [data]);

  return (
    <>
      <TableContainer component={Paper} sx={{ background: "#ffffff" }}>
        <Table className='register_table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>PickUp</TableCell>
              <TableCell>Renewal Time</TableCell>
              <TableCell>Renewal</TableCell>
              <TableCell>RFID Number</TableCell>
              <TableCell>Newsletter</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Confirmed</TableCell>
              <TableCell>Paid</TableCell>
              {
           tableType ==="edit" &&
              <TableCell></TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              visibleData?.length > 0 ?
                <>
                  {visibleData.map((row, index) => (
                    <TableRow key={index} className='row_table' >
                      <TableCell>{row?.first_name}</TableCell>
                      <TableCell>{row?.last_name}</TableCell>
                      <TableCell>{row?.email}</TableCell>
                      <TableCell>
                        <Box>
                          <DatePicker
                          minDate={new Date()}
                          className="custom-datepicker" 
                            value={fieldValues[`pickup_${row?.id}`] || row?.rf_id_pick_date || null}
                            onChange={(date) => handleDatePickerChange(date, row?.id)}
                            renderInput={(params) => <TextField size='small' {...params}  />}
                            disabled={ tableType ==="no_edit"}
                          />
                        </Box>
                      </TableCell>
                      <TableCell>
                        {getRenewalTimeById(row?.rf_id_pick_time)}
                      </TableCell>
                      <TableCell>

                        <Button size='small'
                        disabled={ tableType ==="no_edit" }
                          onClick={() => {
                            setRenewId(row?.id)
                            setRenew(true)
                          }}
                          sx={{backgroundColor: row?.renewal ? "#BADA55":""}}
                        >
                          {row?.renewal ? "Renewed":"renew"}
                        </Button>

                      </TableCell>
                      <TableCell>
                        <TextField
                          sx={{
                            minWidth:"73px"
                          }}
                          size='small'
                          value={fieldValues[`rfid_${row?.id}`] }
                          defaultValue={row?.rf_id_number}
                          disabled={ tableType ==="no_edit"}
                          onChange={(e) =>
                            handleFieldChange(`rfid_${row?.id}`, e.target.value, row?.id)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ color: row?.news_letter ? "#74993F" : "#FF7246" }}>
                        {row?.news_letter ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>{row?.created_at}</TableCell>
                      <TableCell sx={{ color: row?.confirm ? "#74993F" : "#FF7246" }}>
                        {row?.confirm ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        {row?.rf_id_payed ? row?.rf_id_payed : "-"}
                      </TableCell>
                      {
                         tableType ==="edit" &&
                      <TableCell>
                        <Stack direction="row" gap="1rem">
                          <img src={pencil} alt="pincil" onClick={() => {
                            handleUpdateTable(row?.id, row)
                          }} />
                        </Stack>
                      </TableCell>
                      }

                    </TableRow>
                  ))}
                </>
                :
                <TableRow>
                  <TableCell colSpan={11}>No Data</TableCell>
                </TableRow>

            }
          </TableBody>
        </Table>

      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ color: "#8D8D8D", cursor: "pointer" }}
          onClick={() => page === 0 ? "" : handleChangePage(page - 1)}

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
          onClick={() => page === pageCount - 1 ? "" : handleChangePage(page + 1)}

        >
          <Typography variant='body1' >
            Next 5
          </Typography>
          <ArrowForwardIcon fontSize='14px' />
        </Stack>
      </Box>
      <ConfirmationModal
        confirmationMessage='Are you sure you want to Renew Again'
        onClose={() => setRenew(false)}
        onConfirm={handleRenew}
        open={renew}
      />
    </>
  );
};

export default TableMui;
