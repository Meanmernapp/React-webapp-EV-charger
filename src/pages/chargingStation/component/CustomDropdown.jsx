import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomDropdown = ({ value, onChange }) => {

  return (
    <Select value={value} onChange={onChange} size='small'
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          border: "none !important",
          
        },
        color: value == "Yes" ?  "#74993F":"#FF7246"
      }}
    >
      <MenuItem value="Yes">Yes</MenuItem>
      <MenuItem value="No" >No</MenuItem>
    </Select>
  );
};

export default CustomDropdown;
