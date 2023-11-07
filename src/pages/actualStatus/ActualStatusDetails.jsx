import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ESourceEnergyTable } from "./components/ESourceEnergyTable";
import { TopBar } from "./components/TopBar";
import "./ActualStatusDetails.scss";
import { Navigation } from "./components/Navigation";
import { LocationView } from "./components/LocationView";
import { VerticalLinearStepper } from "./components/VerticalLinearStepper";
import location from "../../assets/common/location.svg";
import ArrowRight from "../../assets/Icons/arrowRight.svg";
import { EpackBox } from "./components/EpackBox";
import { StatusHolder } from "./components/StatusHolder";
import { useEffect, useState } from "react";
import blackBox from "../../assets/Icons/blackBox.svg";
import { BatteryStatusBar } from "../../components/BatteryStatusBar";
import { ESourcePriceTable } from "./components/ESourcePriceTable";
import { ESAmountTable } from "./components/ESAmountTable";
import { ESLiveTransactionTable } from "./components/ESLiveTransactionTable";
// import EvLatestTransectionTable  from "./actualStatusEV/components/EvLatestTransectionTable";
const price = {
  "Amount given/date": {
    stats: "0,09€/kWh",
    date: "26/06/23",
    time: "12-16hs",
  },
  "Limit per day": {
    stats: "0,03€/kWh",
    date: "26/06/23",
    time: "12-16hs",
  },
  "Amount per E-Pack": {
    stats: "0,12€/kWh",
    date: "26/06/23",
    time: "12-16hs",
  },
  "Paid price for energy amount given(Purchase Price Total x Total extracted kWh)":
    {
      stats: "24€",
      date: "26/06/23",
    },
};

const energy = {
  "Amount given/date": {
    stats: "200kWh/1MWh",
    date: "26/06/23",
  },
  "Limit per day": {
    stats: "1MWh",
    date: "26/06/23",
  },
  "Amount per E-Pack": {
    stats: "300kWh",
    date: "26/06/23",
  },
};
const amountData = [
  {
    "E-PACK": "E-Pack Edison",
    "Input (E-Pack)": 10,
    "E-Source": "12Wh",
    "Output (E-Source)": 12,
    Time: "Mon 18 Sep 11.52",
    "Extracted Total": 10,
  },
  {
    "E-PACK": "E-Pack Albert",
    "Input (E-Pack)": 10,
    "E-Source": "12Wh",
    "Output (E-Source)": 12,
    Time: "Mon 18 Sep 11.52",
    "Extracted Total": 10,
  },
];
const transections = [
  {
    "E-PACK": "E-Pack Edison",
    START: "Mon 18 Sep 11.52",
    "SOC E-PACK": "25%",
    "INPUT(E-PACK)": "2.8Wh",
    "REPORTED E-SOURCE METER": "2.8Wh",
    "CH. CURRENT": "251.6 A",
    "CH. POWER": "91.6 W",
  },
  {
    "E-PACK": "E-Pack Edison",
    START: "Mon 18 Sep 11.52",
    "SOC E-PACK": "25%",
    "INPUT(E-PACK)": "2.8Wh",
    "REPORTED E-SOURCE METER": "2.8Wh",
    "CH. CURRENT": "251.6 A",
    "CH. POWER": "91.6 W",
  },
];
const ActualStatusDetails = () => {
  const [variant, setVariant] = useState("Available");
  const [soc, setSoc] = useState(50);

  // if any of the plug is available but none is on charge than the status will be Available
  // if any of the plug is on charge the status will be charge
  // And also if it's on charge or discharge than the info bar will be dependent on soc amount
  useEffect(() => {
    if (
      (variant === "Available" || variant === "Available") &&
      !(variant === "Connected" || variant === "Connected")
    ) {
      setVariant("Available");
    } else if (
      variant === "Connected" ||
      variant === "Not Available" ||
      variant === "Connected" ||
      variant === "Not Available"
    ) {
      setVariant("Discharging");
    } else {
      setVariant("danger");
    }
  }, [soc]);
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
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={1}
          >
            <Typography variant="h3" component="h3">
              Bürgersolarpark Schauenburg (PV)
            </Typography>
            <StatusHolder
              statusHeading={"Status"}
              variant={variant}
            />
          </Stack>
          <Box className="container-status-details">
            <TopBar />
            <BatteryStatusBar
              data={[
                { overline: "Work Mode", heading: "ISLAND", subtext: "" },
                {
                  overline: "Available Energy",
                  heading: "1MW",
                  subtext: "Per Day",
                },
                {
                  overline: "Total Output",
                  heading: "400kWh",
                  subtext: "Last 24hs",
                },
              ]}
              variant={variant}
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
            "&.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-3.css-iesyb9-MuiGrid-root":
              { padding: "0" },
          }}
        >
          <LocationView icon={location} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <VerticalLinearStepper />
            </Grid>
            <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
              <Typography
                style={{ flexGrow: "1" }}
                variant="h4"
                component="h4"
                mb={2}
              >
                Active Connections(3)
              </Typography>
              <EpackBox
                dataList={[
                  {
                    power: "150kWh/300kwh",
                    eoc: 75,
                    etf: 30,
                    text: "EPck 233 41",
                    icon: blackBox,
                  },
                  {
                    power: "150kWh/300kwh",
                    eoc: 25,
                    etf: 60,
                    text: "EPck 233 41",
                    icon: blackBox,
                  },
                  {
                    power: "150kWh/300kwh",
                    eoc: 5,
                    etf: 90,
                    text: "EPck 233 41",
                    icon: blackBox,
                  },
                ]}
              />
              <Box
                className="center-status-details"
                sx={{ flexDirection: "column" }}
                mb={3}
              >
                <Box className="center-status-details" mb={1}>
                  <Typography style={{ flexGrow: "1" }} variant="h4">
                    Available Energy
                  </Typography>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      border: "none",
                      color: "#7a7a7a",
                    }}
                  >
                    <img src={ArrowRight} alt="arrowRight" /> See Statistics
                  </Button>
                </Box>
                <ESourceEnergyTable data={energy} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            className="center-status-details"
            sx={{ flexDirection: "column" }}
            mb={3}
          >
            <Box className="center-status-details" mb={1}>
              <Typography sx={{ flexGrow: 1 }} variant="h4">
                Live Transactions
              </Typography>
            </Box>
            <ESLiveTransactionTable tableData={transections} />
            <Box className="center-status-details" mb={1}>
              <Typography sx={{ flexGrow: 1 }} variant="h4">
                Price
              </Typography>
            </Box>
            <ESourcePriceTable data={price} />
          </Box>
          <Box
            className="center-status-details"
            sx={{ flexDirection: "column" }}
            mb={3}
          >
            <Box className="center-status-details" mb={1}>
              <Typography style={{ flexGrow: 1 }} variant="h4">
                Amount kWh extracted today
              </Typography>
            </Box>
            <ESAmountTable tableData={amountData} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ActualStatusDetails;
