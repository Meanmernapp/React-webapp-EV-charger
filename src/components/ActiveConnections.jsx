import { Box, Grid, Stack, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import conectore from "../assets/Icons/conector.svg";
import solar from "../assets/Icons/solar.svg";
import eStation from "../assets/Icons/eStation.svg";
import "./ActiveConnections.scss";
import { getPrimayStatusColors } from "../utils/getColorsWithVariants";
export const ActiveConnections = ({
  icon,
  soc,
  statusPlug1,
  statusPlug2,
  type,
}) => {
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
  return (
    <Grid container mb={2}>
      <Grid
        item
        xl={8}
        lg={8}
        md={8}
        sm={12}
        xs={12}
        className="center active-connections-doughnut-container"
      >
        <Stack direction={"row"} gap={"1rem"}>
          <Box className="doughnet-box">
            <Doughnut
              data={chartData}
              options={chartOptions}
              width="80px"
              height="80px"
            />
            <Box className="doughnet-box-img">
              <img
                src={type === "ev" ? eStation : solar}
                alt="fibox"
                style={{
                  height: type === "ev" ? "40px" : "60px",
                  width: type === "ev" ? "40px" : "60px",
                }}
              />
            </Box>
            <Typography variant="h4" textAlign={"center"}>
              SOC {soc}%
            </Typography>
          </Box>
          {type === "ev" ? (
            <Box
              sx={{
                justifyContent: "space-between",
              }}
              className="active-connections-details"
            >
              <Typography variant="h4"> EV-Charger Thomas</Typography>
              <Typography variant="body2">
                Estimation E-Pack swap:1.30hs
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                justifyContent: "flex-start",
                width: "100%",
              }}
              className="active-connections-details"
            >
              <Typography variant="h4" mb={1}>
                Bürgersolarpark Schauenburg (PV)
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  End of charge
                </Typography>
                <Typography variant="body1">80%</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  EOC ESTIMATION:
                </Typography>
                <Typography variant="body1">1.5hs</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  ONLINE NUMBER:
                </Typography>
                <Typography variant="body1">PCM:03 PDMD:00</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  DC Voltage:
                </Typography>
                <Typography variant="body1">798 V</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  DC Current:
                </Typography>
                <Typography variant="body1">21.1 a. V</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  width={"120px"}
                >
                  Conector:
                </Typography>
                <Typography variant="body1">Conector 1</Typography>
              </Box>
            </Box>
          )}
        </Stack>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Grid container width={"100%"}>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={6}
            xs={12}
            className="center active-connections-switch-container"
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={conectore}
                alt="conector"
                width={"40px"}
                height={"40px"}
              />
              <Box>
                <Typography variant="h4">Plug1</Typography>
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
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={6}
            xs={12}
            className="center active-connections-switch-container"
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
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
        </Grid>
      </Grid>
    </Grid>
  );
};
