import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0KM",
  },
  {
    value: 5,
    label: "5KM",
  },
  {
    value: 25,
    label: "25KM",
  },
  {
    value: 50,
    label: "50KM",
  },
];

function valuetext(value) {
  return <Typography variant="body2">{value}KM</Typography>;
}

export default function SelectDriverSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body2" textTransform={"uppercase"}>
        Select Distance
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={25}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        min={0}
        max={50}
        sx={{
          color: "#BADA55",
          height: 13,
          marginBottom: "1rem",
          width: "99%",
          "& .MuiSlider-track": {
            border: "1px solid #7a7a7a",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid #7a7a7a",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "#000",
            },
            "&:before": {
              display: "none",
              color: "red",
              backgroundColor: "red",
            },
          },
          "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            // backgroundColor: "gray",
            transformOrigin: "bottom left",
            left: "calc(-50% ,- 4px)",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": {
              display: "none",
            },
            "&.MuiSlider-valueLabelOpen": {
              color: "#fff",
              backgroundColor: "#BADA55",
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
              transform: "rotate(45deg)",
            },
          },
        }}
      />
    </Box>
  );
}
