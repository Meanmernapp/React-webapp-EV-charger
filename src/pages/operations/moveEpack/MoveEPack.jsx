import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Navigation } from "../../actualStatus/components/Navigation";
import { VerticalLinearStepper } from "../../actualStatus/components/VerticalLinearStepper";
import { LocationView } from "../../actualStatus/components/LocationView";
import { useNavigate } from "react-router-dom";
export const MoveEPack = () => {
  const isSmallerScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );

  const navigate = useNavigate();
  return (
    <Grid container sx={{ mb: 5, background: "white", padding: "1rem" }}>
      <Grid
        item
        mb={4}
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Navigation
          breadcrumbsData={[
            {
              link: "/operations",
              text: "Operations",
            },
            {
              link: "/",
              text: "Confirmation",
            },
          ]}
        />
      </Grid>

      <Grid
        item
        xl={3}
        lg={3}
        md={6}
        sm={12}
        xs={12}
        sx={{ backgroundColor: "#e7e7e7", padding: "0 0 0 1rem" }}
      >
        <VerticalLinearStepper />
      </Grid>
      <Grid item xl={9} lg={9} md={6} sm={12} xs={12}>
        <Stack
          mb={4}
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Navigation
            breadcrumbsData={[
              {
                link: "/operations",
                text: "Operations",
              },
              {
                link: "/",
                text: "Confirmation",
              },
            ]}
          />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={isSmallerScreen ? "100%" : "80%"}
          >
            <LocationView />
            <Typography variant={isSmallerScreen ? "h2" : "h3"} mb={4}>
              Your request is waiting for driver's confirmation
            </Typography>
            <Typography mb={2}>
              E-Pack Edison (Location) -- E-Pack Einstein (Location)
            </Typography>
            <Typography mb={2}>Driver:Diana Rotchen(Location)</Typography>
            <Typography variant="h5" mb={4}>
              Estimated operation time 90 mins
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  background: "#fff",
                  color: "#88B14B",
                  minWidth: "10rem",
                  borderRadius: "8px",
                  border: "1px  solid #88B14B",
                  "&:hover": {
                    color: "#fff",
                    background: "#88b14b",
                  },
                }}
                onClick={() => navigate("/operations")}
              >
                View My Operations
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#88B14B",
                  minWidth: "10rem",
                  borderRadius: "8px",
                  border: "1px solid #88b14b",
                  "&:hover": {
                    color: "#88b14b",
                    background: "#fff",
                  },
                }}
                onClick={() => navigate("/select-epack")}
              >
                New Request
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
