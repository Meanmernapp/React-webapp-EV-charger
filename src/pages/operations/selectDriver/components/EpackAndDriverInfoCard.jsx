import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { EpackList } from "../../packJoins/JoinPacks";

export const EpackAndDriverInfoCard = ({ icon, data, title }) => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ position: "relative" }}
    >
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack
            width={"100%"}
            minHeight={"220px"}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "row",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Box
              width={"10%"}
              minHeight={"220px"}
              sx={{
                backgroundColor: "#eaeaea",
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <img src={icon} alt="emptyBattery" />
            </Box>
            <Stack
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              width={"95%"}
              padding={"1rem"}
            >
              <Typography variant="h3" mb={2}>
                {title}
              </Typography>
              <EpackList data={data} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
