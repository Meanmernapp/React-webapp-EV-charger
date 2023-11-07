import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

function Notification({ id, text, read, markAsRead }) {
  return (
    <Box
      sx={{
        position: "absolute",
        minWidth: "250px",
        minHeight:"50px",
        right: "-12px",
        top: "70px",
        background: "#E6E6E6",
        boxShadow: "5px 9px 20px 0 rgba(0, 0, 0, 0.5)",
        borderRadius:"4px",
        padding:"0.5rem"
      }}
      className={`notification ${read ? 'read' : 'unread'}`}
      onClick={() => markAsRead(id)}
    >
      <Typography variant='body2' textAlign={"center"}>notification</Typography>
      <Divider/>
      <Box paddingTop={"0.5rem"}>

      You have no notification currently
      {/* {text} */}
      </Box>
    </Box>
  );
}

export default Notification;
