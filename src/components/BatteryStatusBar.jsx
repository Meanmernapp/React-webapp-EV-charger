import { Grid, Typography } from "@mui/material";
import React from "react";

export const BatteryStatusBar = ({ data, variant }) => {
  const numberOfColumns = Math.max(1, Math.min(4, data.length));

  return (
    <Grid
      container
      sx={{
        bgcolor:
          variant === "success"
            ? "#e7eedc"
            : variant === "danger"
            ? "#ffeeec"
            : "#BDDFFF",
        minHeight: "8.5rem",
        height: "auto",
      }}
    >
      {data?.map((item, index) => (
        <Grid
          key={index}
          item
          xl={Math.floor(12 / numberOfColumns)}
          lg={Math.floor(12 / numberOfColumns)}
          md={Math.floor(12 / numberOfColumns)}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: variant === "danger" ? "#FF553E" : "black" }}
          >
            {item.overline}
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: variant === "danger" ? "#FF553E" : "black" }}
          >
            {item.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: variant === "danger" ? "#FF553E" : "black",
              fontSize: "11px",
            }}
          >
            {item.subtext}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
