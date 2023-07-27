import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const SearchField = ({ value, onChange, placeholder,bgColor}) => {
  return (
    <TextField
      variant="outlined"
      size='small'
      value={value}
      onChange={onChange}
      fullWidth
      placeholder={placeholder}
      sx={{background:{bgColor}, borderRadius:"5px"}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
