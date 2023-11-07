import { Box, Grid, Stack, Typography } from "@mui/material";
import { LocationView } from "../components/LocationView";
import "./ActualStatusEpack.scss";
import grayEStation from "../../../assets/Icons/grayEStation.svg";
import { StatusHolder } from "../components/StatusHolder";
import { VerticalLinearStepper } from "../components/VerticalLinearStepper";
import { BatteryStatusBar } from "../../../components/BatteryStatusBar";
import { ActiveConnections } from "../../../components/ActiveConnections";
import { TopBar } from "../components/TopBar";
import { SwapBar } from "../../../components/SwapBar";
import { Navigation } from "../components/Navigation";
import EpLatestTransectionTable from "./components/EvLatestTransectionTable";
import EpLiveTransactionTable from "./components/EvLiveTransactionTable";
import { useEffect, useState } from "react";

const tableData = [
  {
    "CARD RFID": "RFID001",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "1 hour 30 minutes",
    PLUG: "Plug A",
    PRICE: "$5.00",
    "ENDING POWER": "90%",
  },
  {
    "CARD RFID": "RFID002",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug B",
    PRICE: "$3.50",
    "ENDING POWER": "78%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
  {
    "CARD RFID": "RFID003",
    START: "Mon 18 sep 11.55",
    STOP: "Mon 18 sep 11.55",
    DURATION: "45 minutes",
    PLUG: "Plug C",
    PRICE: "$4.00",
    "ENDING POWER": "82%",
  },
];
const liveTransactions = [
  {
    PLUG: "1",
    START: "Mon 18 sep 11.55",
    "START VALUE": "20kW",
    "STOP VALUE": "20kW",
    "STOP REASON": "User",
    "CARD RFID/REMOTE": "RFID003",
    SOCEV: "25%",
    PRICE: "$4.00",
    INPUT: "2.8Wh5",
    "CHARGE CURRENT VOLTAGE": "0A/0V",
    "CHARGE POWER": "0kW",
  },
];

export const ActualStatusEpack = () => {
  const [variant, setVariant] = useState("Available");
  const [statusPlug1, setStatusPlug1] = useState("Not Available");
  const [statusPlug2, setStatusPlug2] = useState("Connected");
  const [soc, setSoc] = useState(50);
  const [showSwapBar, setShowStatusBar] = useState(false);

  // if any of the plug is available but none is on charge than the status will be Available
  // if any of the plug is on charge the status will be charge
  // And also if it's on charge or discharge than the info bar will be dependent on soc amount
  useEffect(() => {
    if (
      (statusPlug1 === "Available" || statusPlug2 === "Available") &&
      !(statusPlug1 === "Connected" || statusPlug2 === "Connected")
    ) {
      setVariant("Available");
    } else if (
      statusPlug1 === "Connected" ||
      statusPlug1 === "Not Available" ||
      statusPlug2 === "Connected" ||
      statusPlug2 === "Not Available"
    ) {
      setVariant("Discharging");
      setShowStatusBar(true);
    } else {
      setVariant("danger");
    }
  }, [statusPlug1, statusPlug2, soc]);
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        padding: " 1rem ",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Grid item md={12} mb={3}>
        <Navigation
          breadcrumbsData={[
            {
              link: "/actual-Status",
              text: "Actual Status",
            },
            {
              link: "/",
              text: "E Packs",
            },
            {
              text: "E-Pack Edison",
            },
          ]}
        />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} sx={{ width: "100%" }}>
          <Box className="ac-container-epack-details ">
            <Stack
              direction="row"
              justifyContent="space-between"
              width={"100%"}
            >
              <Typography variant="h3" component="h2">
                E-Pack Edison
              </Typography>
              <StatusHolder
                variant={
                  soc > 50 && variant === "Discharging" ? "Charging" : variant
                }
              />
            </Stack>
            <TopBar />
            <BatteryStatusBar
              data={[
                {
                  overline: "Work Status",
                  heading: "Discharging(VF)",
                  subtext: "",
                },
                {
                  overline: "Capacity ATM",
                  heading: "100/250kWh",
                  subtext: "",
                },
                { overline: "SOC", heading: soc, subtext: "" },
                {
                  overline: "OutPut ATM",
                  heading: "0.0V/0.0A 0.0kW",
                  subtext: "",
                },
              ]}
              variant={
                variant === "Discharging" && soc <= 50
                  ? "danger"
                  : variant === "Available"
                  ? "success"
                  : ""
              }
            />
          </Box>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            width: "100%",
          }}
        >
          <LocationView icon={grayEStation} />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {showSwapBar && (
            <SwapBar
              variant={
                variant === "Discharging" && soc <= 50
                  ? "danger"
                  : soc > 50 || variant === "Available"
                  ? "success"
                  : ""
              }
            />
          )}
        </Grid>

        <Grid
          item
          xl={3}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            width: "100%",
          }}
        >
          <VerticalLinearStepper />
        </Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          sm={12}
          xs={12}
          sx={{ width: "100%", paddingLeft: "0" }}
        >
          <Box className="container-epack-details" sx={{ paddingLeft: "0" }}>
            <Typography
              style={{ flexGrow: "1" }}
              variant="h4"
              component="h4"
              mb={2}
            >
              Active Connections
            </Typography>

            <ActiveConnections
              soc={soc}
              statusPlug1={statusPlug1}
              statusPlug2={statusPlug2}
              type={"solar"}
            />
            <Typography variant="h4" mb={2}>
              Live Transaction
            </Typography>
            <EpLiveTransactionTable tableData={liveTransactions} />
            <Typography variant="h4" mb={2}>
              Lates Transaction
            </Typography>
            <EpLatestTransectionTable tableData={tableData} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
