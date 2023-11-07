import "./EVChargerDetail.scss";
import { VerticalLinearStepper } from "../components/VerticalLinearStepper";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { LocationView } from "../components/LocationView";
import { Navigation } from "../components/Navigation";
import { StatusHolder } from "../components/StatusHolder";
import { TopBar } from "../components/TopBar";
import eStation from "../../../assets/Icons/eStation.svg";
import EvConnections from "./components/EvConnections";
import location from "../../../assets/common/location.svg";
import { SwapBar } from "../../../components/SwapBar";
import { useState } from "react";
import EvLiveTransactionTable from "./components/EvLiveTransactionTable";
import EvLatestTransectionTable from "./components/EvLatestTransectionTable";
import { useEffect } from "react";

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
];
export const EVChargerDetail = () => {
  const [variant, setVariant] = useState("Available");
  const [statusPlug1, setStatusPlug1] = useState("Available");
  const [statusPlug2, setStatusPlug2] = useState("Charging");
  const [soc, setSoc] = useState(50);

  // if any of the plug is available but none is on charge than the status will be Available
  // if any of the plug is on charge the status will be charge
  // And also if it's on charge or discharge than the info bar will be dependent on soc amount
  useEffect(() => {
    if (
      (statusPlug1 === "Available" || statusPlug2 === "Available") &&
      !(statusPlug1 === "Charging" || statusPlug2 === "Charging")
    ) {
      setVariant("Charging");
    } else if (statusPlug1 === "Charging" || statusPlug2 === "Charging") {
      setVariant("Charging EV");
    } else {
      setVariant("Not Available");
    }
  }, [statusPlug1, statusPlug2, soc]);
  // useEffect(() => {
  //   console.log(variant);
  // });
  return (
    <Stack
      style={{
        backgroundColor: "white",
        padding: "1rem",
        position: "relative",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Grid item md={12} mb={3}>
        <Navigation
          breadcrumbsData={[
            { link: "/", text: "Actual Status" },
            { link: "/", text: "E-PAck" },
            { link: "/", text: "EV-Charger Thomas" },
          ]}
        />
      </Grid>

      <Grid container spacing={3}>
        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          sm={12}
          xs={12}
          className="ev-contaeiner-status-detail-scrolldiv"
          mb={2}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h3" component="h3">
              EV-Charger Thomas
            </Typography>
            <StatusHolder variant={variant} />
          </Stack>
          <Box className="ev-container-status-details">
            <TopBar />
          </Box>
          <Box height={"135px"}>
            <SwapBar
              variant={
                variant === "Charging EV" && soc <= 50
                  ? "danger"
                  : soc > 50 || variant === "Charging EV"
                  ? "success"
                  : variant === "Not Available"
                  ? "danger"
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
          sm={6}
          xs={12}
          width={"100%"}
          paddingLeft={"1rem"}
        >
          <LocationView
            icon={location}
            location={"Saalweg 26 , 34270 Schauenburg"}
            text={"Text..."}
          />
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <VerticalLinearStepper />
        </Grid>
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
          <Box className="container-epack-details">
            <Typography
              style={{ flexGrow: "1" }}
              variant="h4"
              component="h4"
              mb={2}
            >
              Active Connections
            </Typography>
            <EvConnections
              soc={soc}
              icon={eStation}
              statusPlug1={statusPlug1}
              statusPlug2={statusPlug2}
            />
            <Typography variant="h4" mb={2}>
              Latest Transaction
            </Typography>
            <EvLatestTransectionTable tableData={tableData} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
