import React from 'react';
import { FormControl, Select, MenuItem, ListItemIcon } from '@mui/material';

const SelectField = ({ value, onChange, icon: IconComponent, placeholder }) => {
    return (
        <FormControl fullWidth variant="outlined" >
            <Select
            
                size='small'
                value={value}
                onChange={onChange}
                displayEmpty  // Show the placeholder-like text
                sx={{ background: "#F9F9F9", borderRadius: "5px", zIndex:"10" }}
                startAdornment={
                    <ListItemIcon sx={{ minWidth: 35 }}>
                        <img src={IconComponent} alt="icons" />
                    </ListItemIcon>
                }
                MenuProps={{  // Additional props for the Menu component
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    getcontentanchorel: null,  // Ensures the menu opens below the select field

                }}
            >
                {/* The placeholder MenuItem */}
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
                <MenuItem value="search">All</MenuItem>
                <MenuItem value="favorite">Available for charging</MenuItem>
                <MenuItem value="cart">Shopping Cart</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectField;
