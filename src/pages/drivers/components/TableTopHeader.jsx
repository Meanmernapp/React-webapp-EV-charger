import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import "./TableTopHeader.scss";
export const TableTopHeader = () => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
      }}
    >
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Stack>
          <Box
            className="table-top-header-center-content"
            sx={{
              borderRight: "5px solid #e6e6e6",
            }}
          >
            Suggested Need swap
          </Box>
        </Stack>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Stack>
          <Box
            sx={{
              borderLeft: "5px solid #e6e6e6",
            }}
            className="table-top-header-center-content"
          >
            Ready for swap
          </Box>
        </Stack>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          position: "absolute",
          left: "0",
          top: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            bgcolor: "#E6E6E6",
          }}
        ></Box>
      </Box>
    </Grid>
  );
};
