import React from "react";
import { Grid, Typography } from "@mui/material";

export const ESourceEnergyTable = ({ data }) => {
  return (
    <>
      {Object.keys(data)?.map((_, index) => (
        <Grid
          container
          key={index}
          sx={{
            border: "1px solid #d1d1d1",
            padding: "1rem",
            "&:hover": { backgroundColor: "#d1d1d1" },
          }}
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography>{_}</Typography>
          </Grid>
          {Object.keys(data[_]).map((__, index1) => (
            <Grid
              key={index1}
              sx={{ textAlign: "right" }}
              item
              xl={6 / Object.keys(data[_]).length}
              lg={6 / Object.keys(data[_]).length}
              md={6 / Object.keys(data[_]).length}
              sm={12}
              xs={12}
            >
              <Typography>{data[_][__]}</Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
};
