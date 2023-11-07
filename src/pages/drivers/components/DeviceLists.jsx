import styled from "@emotion/styled";
import { Battery0Bar } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./DeviceLists.scss";
import emptyBattery from "../../../assets/Icons/empty.svg";
import { MobileViewHeader } from "./MobileViewHeader";
export const Circle = ({ bgc }) => {
  return (
    <Box
      sx={{
        bgcolor: bgc,
      }}
      className="device-list-circle "
    ></Box>
  );
};

export const DeviceLists = ({ data }) => {
  return (
    <Stack padding={"1rem"}>
      <Stack
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <MobileViewHeader text={"swap"} />
      </Stack>
      {data?.map((item, index) => (
        <Grid mb={3} container key={index} spacing={2}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="device-list-center "
          >
            <Circle bgc={"#BADA55"} />

            <Box>
              <Typography variant="body1">{item.text1}</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="device-list-center "
          >
            <Box>
              <Typography variant="body1">{item.text2}</Typography>
            </Box>
            <img src={emptyBattery} alt={emptyBattery} />
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};
