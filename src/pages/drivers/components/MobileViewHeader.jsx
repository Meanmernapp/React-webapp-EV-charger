import { Stack } from "@mui/material";
import React from "react";

export const MobileViewHeader = ({ text }) => {
  return (
    <Stack
      sx={{
        height: "30px",
        bgcolor: "black",
        color: "white",
        width: "100%",
        textAlign: "center",
        
      }}
      mb={2}
    >
      {text}
    </Stack>
  );
};
