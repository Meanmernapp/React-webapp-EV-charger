import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

export const AmountTable = ({ data }) => {
  const [totalSum, setTotalSum] = useState(0);

  const calculateTotalSum = () => {
    let sum = 0;
    for (const row of data) {
      sum += row.value1;
    }
    return sum;
  };

  useEffect(() => {
    const sum = calculateTotalSum();
    setTotalSum(sum);
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          border: "1px solid #d1d1d1",
          padding: "1rem",
          "&:hover": { backgroundColor: "#f7f7f7" },
        }}
      >
        {data?.map((item, index) => (
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Typography key={index} variant="overline" color={"#7a7a7a"}>
              {item.heading}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {data?.map((row, index) => (
        <Grid
          key={index}
          container
          sx={{
            border: "1px solid #d1d1d1",
            padding: "1rem",
            "&:hover": { backgroundColor: "#f7f7f7" },
          }}
        >
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Typography>{row.label}</Typography>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Typography>{row.input}</Typography>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Typography>{row.esource}</Typography>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Typography>{row.output}</Typography>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Typography>{row.time}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
