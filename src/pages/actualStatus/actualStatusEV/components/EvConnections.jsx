import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import conectore from "../../../../assets/Icons/conector.svg";
import "./ActiveConnections.scss";
import { Pause, PlayArrow, Restore } from "@mui/icons-material";
import { useState } from "react";
import { getPrimayStatusColors } from "../../../../utils/getColorsWithVariants";
const EvConnections = ({ soc, icon, statusPlug1, statusPlug2 }) => {
  const eocChecker = (soc) => {
    if (soc < 25) {
      return "#FF553E";
    } else if (soc <= 50) {
      return "#E5D73E";
    } else {
      return "#BADA55";
    }
  };
  const chartData = {
    datasets: [
      {
        data: [soc, 100 - soc],
        backgroundColor: [eocChecker(soc), "black"],
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
    cutout: "85%", // Adjust the cutout percentage as needed
    maintainAspectRatio: false,
    responsive: true,
    spacing: 0,
  };

  // States for the play pause

  const [showPlay, setShowPlay] = useState(false);
  return (
    <Grid container mb={2}>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="start active-connections-doughnut-container"
      >
        <Grid container>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Box className="doughnet-box">
              <Doughnut
                data={chartData}
                options={chartOptions}
                width="80px"
                height="80px"
              />
              <Box className="doughnet-box-img">
                <img
                  src={icon}
                  alt={`${icon}img`}
                  style={{ height: "40px", width: "40px" }}
                />
              </Box>
              <Typography variant="h4" textAlign={"center"}>
                SOC {soc}%
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-Start",
              }}
            >
              <Typography variant="h4" mb={1}>
                EV-Pack Edison
              </Typography>
              <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                Working mode:
              </Typography>
              <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                Capacity:
              </Typography>
              <Typography
                variant="body2"
                sx={{ textTransform: "uppercase" }}
                mb={1}
              >
                Output:
              </Typography>

              <Typography variant="body2" sx={{ color: "#ff553e" }}>
                Estimation E-Pack swap:1.30hs
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container width={"100%"}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className="start active-connections-switch-container"
          >
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <img
                    src={conectore}
                    alt="conector"
                    width={"40px"}
                    height={"40px"}
                  />
                  <Box>
                    <Typography variant="h4">Plug2</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: getPrimayStatusColors(statusPlug1),
                      }}
                    >
                      {statusPlug1}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignContent={"flex-start"}
                >
                  {showPlay && (
                    <Button
                      onClick={() => setShowPlay(false)}
                      startIcon={<PlayArrow sx={{ color: "#7a7a7a" }} />}
                      variant="outlined"
                      sx={{
                        color: "#000",
                        border: "1px solid #d1d1d1",
                        padding: "4px 15px",
                        "&:hover": {
                          border: "1px solid #aaa",
                        },
                      }}
                    >
                      Play
                    </Button>
                  )}

                  {!showPlay && (
                    <Button
                      onClick={() => setShowPlay(true)}
                      startIcon={<Pause sx={{ color: "#7a7a7a" }} />}
                      variant="outlined"
                      sx={{
                        color: "#000",
                        border: "1px solid #d1d1d1",
                        textTransform: "capitalize",
                        padding: "4px 15px",
                        "&:hover": {
                          border: "1px solid #aaa",
                        },
                      }}
                    >
                      Stop
                    </Button>
                  )}
                  <Button
                    onClick={() => setShowPlay(true)}
                    startIcon={<Restore sx={{ color: "#7a7a7a" }} />}
                    variant="outlined"
                    sx={{
                      color: "#000",
                      border: "1px solid #d1d1d1",
                      textTransform: "capitalize",
                      padding: "4px 15px",
                      "&:hover": {
                        border: "1px solid #aaa",
                      },
                    }}
                  >
                    Reset
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className="start active-connections-switch-container"
          >
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <img
                    src={conectore}
                    alt="conector"
                    width={"40px"}
                    height={"40px"}
                  />
                  <Box>
                    <Typography variant="h4">Plug2</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: getPrimayStatusColors(statusPlug2),
                      }}
                    >
                      {statusPlug2}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignContent={"flex-start"}
                >
                  {showPlay && (
                    <Button
                      onClick={() => setShowPlay(false)}
                      startIcon={<PlayArrow sx={{ color: "#7a7a7a" }} />}
                      sx={{
                        color: "#000",
                        border: "1px solid #d1d1d1",
                        padding: "4px 15px",
                        "&:hover": {
                          border: "1px solid #aaa",
                        },
                      }}
                      variant="outlined"
                    >
                      Play
                    </Button>
                  )}

                  {!showPlay && (
                    <Button
                      onClick={() => setShowPlay(true)}
                      startIcon={<Pause sx={{ color: "#7a7a7a" }} />}
                      sx={{
                        color: "#000",
                        border: "1px solid #d1d1d1",
                        padding: "4px 15px",
                        "&:hover": {
                          border: "1px solid #aaa",
                        },
                      }}
                      variant="outlined"
                    >
                      Stop
                    </Button>
                  )}
                  <Button
                    onClick={() => setShowPlay(true)}
                    startIcon={<Restore sx={{ color: "#7a7a7a" }} />}
                    sx={{
                      color: "#000",
                      border: "1px solid #d1d1d1",
                      padding: "4px 15px",
                      "&:hover": {
                        border: "1px solid #aaa",
                      },
                    }}
                    variant="outlined"
                  >
                    Reset
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EvConnections;
