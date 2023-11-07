import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetDriverTask } from "../../services/driver/DriverApi";

export const Drivers = () => {
  // constant
  const isTask = "false"
  // state
  const { getHeaderHeight } = useSelector((state) => state.SharedSlice);
  const {getDriver} = useSelector((state)=> state.DriverSlice)
  const mapViewHeight = `calc(100vh - ${getHeaderHeight}px)`;
  // hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(getDriver)

  // lifeCyle hook
  useEffect(() => {
    dispatch(GetDriverTask())
  }, [])

  return (
    <Box sx={{ background: "#fff" }} height={mapViewHeight}>

      <Grid item xs={12} sm={5} md={5} lg={5} maxWidth={"425px"}
        sx={{ background: '#fff', margin: "0 auto", padding: "1rem" }}

      >
        {
          isTask === true ?
            <Typography
              variant="h3"
              component={"h1"}
              sx={{ color: "#88B14B" }}
              textAlign={"center"}
              paddingTop={"1rem"}
            >
              You have a request for a new task.
            </Typography>
            :
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "80vh" }}>

              <Typography
                variant="h3"
                component={"h1"}
                sx={{ color: "#88B14B" }}
                textAlign={"center"}
                paddingTop={"1rem"}
              >
                You have no requests at the moment.
              </Typography>
            </Box>

        }

        {
          isTask === true &&

          <Typography
            variant="h3"
            component={"h1"}
            sx={{ color: "#FF553E" }}
            textAlign={"center"}
            paddingTop={"1rem"}
          >
            !urgent
          </Typography>
        }


        {
          isTask === true &&
          <Box padding={"1rem"}>
            <Box >
              <Typography
                variant="h4"
                component={"h2"}
                paddingTop={"1rem"}
              >
                Swap E-Packs
              </Typography>
              <Stack direction={"row"} gap={"0.3rem"}>
                <Typography
                  variant="body1"
                  sx={{ color: "#7A7A7A" }}
                >
                  Request time:
                </Typography>
                <Typography
                  variant="body1"
                >
                  Mon 27 Sept 14.41
                </Typography>
              </Stack>

            </Box>

            <Box paddingTop={"1rem"}>
              <Typography
                variant="h4"
                component={"h2"}
                paddingTop={"1rem"}
              >
                E-Pack Edison
              </Typography>
              <Typography
                variant="body1"
              >
                24-Autohof Lutterberg (1km)
              </Typography>
            </Box>

            <Box paddingTop={"1rem"}>
              <Typography
                variant="h4"
                component={"h2"}
                paddingTop={"1rem"}
              >
                E-Pack Einstein
              </Typography>
              <Typography
                variant="body1"
              >
                Saalweg 26, 34270 Schauenburg (10km)
              </Typography>


            </Box>

            <Box sx={{ paddingTop: "2rem" }}>
              <Button variant='contained' fullWidth
                onClick={() => navigate("/drivers/swap-epack")}
                sx={{
                  background: "#71953E", color: "#fff", "&:hover": {
                    background: "#BADA55",
                    color: "#000"
                  }
                }}>
                Confirm
              </Button>

              <Button

                sx={{
                  marginTop: "1rem",
                  border: "1px solid #71953E", color: "#71953E", "&:hover": {
                    border: " 1px solid #BADA55",
                    color: "#000"
                  }
                }} variant='outlined' fullWidth >
                ignore
              </Button>
            </Box>
          </Box>

        }


      </Grid>
    </Box>
  );
};