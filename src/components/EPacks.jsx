import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./EPacks.scss";
export const EPacks = ({ data, index }) => {
  const eocChecker = (eoc) => {
    if (eoc < 25) {
      return "#FF553E";
    } else if (eoc <= 50) {
      return "#E5D73E";
    } else {
      return "#BADA55";
    }
  };

  const eoc = data.eoc;
  const chartData = {
    datasets: [
      {
        data: [eoc, 100 - eoc],
        backgroundColor: [eocChecker(eoc), "black"],
      },
    ],
  };
  // Chart.js options for the doughnut chart
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "76%", // Adjust the cutout percentage as needed
    maintainAspectRatio: false,
    responsive: true,
    spacing: 0,
  };

  return (
    <Stack padding={"1rem"} className="epacks-container">
      <Box className="epacks-container-inner-typos" mb={1}>
        <Typography sx={{ color: "#71953E" }} variant="body1" component="body1">
          EOC:{data?.eoc}%
        </Typography>
        <Typography sx={{ color: "#71953E" }} variant="body1" component="body1">
          ETF:{data?.etf} min
        </Typography>
      </Box>
      <Box className="doughnet-boxx" mb={1}>
        <Doughnut
          data={chartData}
          options={chartOptions}
          width="80px"
          height="80px"
        />
        <Box className="doughnet-boxx-img">
          <img
            src={data?.icon}
            alt="fibox"
            style={{ height: "60px", width: "60px" }}
          />
        </Box>
      </Box>
      <Stack>
        <Typography variant="h4" component="h4" mb={1}>
          {data?.text}
        </Typography>
        <Typography sx={{ color: "#71953E" }} variant="body1" component="body1">
          {data?.power}
        </Typography>
        <Typography
          sx={{ color: "#71953E", textAlign: "center" }}
          variant="body1"
          component="body1"
        >
          Conector {index}
        </Typography>
      </Stack>
    </Stack>
  );
};
