
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Badge, Checkbox, FormControlLabel, Stack, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ResulabAccordion = ({ title, count, icon }) => {
  // Sample list of items (replace this with your actual list of items)
  const itemList = [
    { id: 1, name: 'All', count: 4, isChecked: false },
    { id: 2, name: 'Available for charging', count: 2, isChecked: false },
    { id: 3, name: 'Charging', count: 1, isChecked: false },
    { id: 4, name: 'Not Available', count: 1, isChecked: false },

  ];

  const handleCheckboxChange = (itemId) => (event) => {
    // Update the state or perform any action when a checkbox is clicked
    // You can store the checked state in the component's state or manage it using a state management library like Redux.
    console.log(`Checkbox ${itemId} is checked: ${event.target.checked}`);
  };

  return (
    <Accordion sx={{ backgroundColor: "#F9F9F9", boxShadow: "none" }} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-setsize={"small"}
        aria-controls="panel-content"
        id="panel-header"
        sx={{ minHeight: "35px", maxHeight: "35px" }}
      >
        <Stack direction="row" alignItems="center" gap="0.6rem">
          <img src={icon} alt="" width="24px" height="24px" />
          <Typography variant='body1'>
            {title}
          </Typography>
          {
            count &&
            <Box className='badge_div'>
              <Typography fontSize="11px">{count}</Typography>
            </Box>
          }
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "8px 6px 16px" }}>
        <Divider />
        <Stack>
          {itemList.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: "space-between" }}>
              <Typography variant='body1'>
                {item.name} ({item.count})
              </Typography>
              <Checkbox
                checked={item.isChecked}
                onChange={handleCheckboxChange(item.id)}
              />
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ResulabAccordion;

