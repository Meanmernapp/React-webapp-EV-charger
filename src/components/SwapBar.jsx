import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  getPrimayStatusColors,
  getStatusHolderBg,
} from "../utils/getColorsWithVariants";

export const SwapBar = ({ height, variant, text, onClick }) => {
  return (
    <Box
      sx={{
        height: height ? height : "100%",
        bgcolor: getStatusHolderBg(variant),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        border: "1px solid",
        borderColor: getPrimayStatusColors(variant),
      }}
    >
      <Box>
        <Typography
          sx={{
            color: getPrimayStatusColors(variant),
          }}
        >
          {variant === "danger"
            ? "E-Pack Thomas has low charge. Click the button to request swap"
            : variant === "success"
            ? "E-Pack swap has been requested"
            : text}
        </Typography>
      </Box>

      <Button
        onClick={onClick}
        sx={{
          color: getPrimayStatusColors(variant),

          textTransform: "capitalize",
          border: "1px solid",
          borderColor: getPrimayStatusColors(variant),

          "&:hover": {
            color:
              variant === "danger"
                ? "#fff"
                : variant === "success"
                ? "#fff"
                : "",
            backgroundColor: getPrimayStatusColors(variant),
          },
        }}
      >
        {variant === "danger"
          ? "Swap E-Pack"
          : variant === "success"
          ? "See Operation Status"
          : text}
      </Button>
    </Box>
  );
};
