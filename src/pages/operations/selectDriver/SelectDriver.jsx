import { Box, Button, Checkbox, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { DriverPageMenu } from "../components/DriverPageMenu";
import { useDispatch, useSelector } from "react-redux";
import { GetLocations } from "../../../services/location/LocationApi";
import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../../actualStatus/components/Navigation";
import { VerticalLinearStepper } from "../../actualStatus/components/VerticalLinearStepper";
import { DriverRadioGroup } from "../components/DriverRadioGroup";
import { JoinPacks } from "../packJoins/JoinPacks";
import SelectDriverSlider from "../selectDriver/components/SelectDriverSlider";
import { LocationView } from "../../actualStatus/components/LocationView";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { EpackAndDriverInfoCard } from "./components/EpackAndDriverInfoCard";
import { useNavigate } from "react-router-dom";
import "./SelectDriver.scss";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import bus from "../../../assets/Icons/bus.svg";
import emptyBattery from "../../../assets/Icons/emptyBattery.svg";
import DateAndTime from "./components/DateAndTime";
import { GetAllDrivers } from "../../../services/drivers/DriversApi";
import { CreateOperaions } from "../../../services/operations/OperationsApi";
import {
  getCount,
  getLoad,
  resetCount,
  resetLoad,
  updateCount,
} from "../../../services/genralData/GenralDataSlice";
const data = [
  { key: "Capacity", value: "200kWh" },
  { key: "Available Energy", value: "250kWh/300kWh" },
  { key: "SOc", value: "55%" },
  { key: "Location", value: "24-Autohof Lutterberg" },
  { key: "Last Activity", value: "Mon 27 Sept 14.52" },
  { key: "Charger", value: "Thomas" },
];
export const SelectDriver = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [transportType, setTransportType] = useState("manual");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [addDateTime, setAddDateTime] = useState("");
  const [finalData, setFinalData] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [driverInfo, setDriverInfo] = useState([]);

  // DATE & TIME
  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
    const newData = {
      ...data,
      scheduled_at: dateTime.$d,
    };
    setFinalData(newData);
  };

  // USRGENT
  const handleCheckboxChange = (event) => {
    const newData = {
      ...data,
      is_urgent: event.target.checked,
    };
    setFinalData(newData);
  };
  // DATA OF EPACK
  const data = useSelector((state) => state.GenralDataSlice.data);

  const handleDriver = (selectedValue) => {
    let driver = drivers.find((item) => item.driver_name === selectedValue);
    setDriverInfo(driver);
    const newData = {
      ...data,
      driver_id: driver.driver_id,
    };
    setFinalData(newData);
  };
  // SHOW DATE PICKER
  const handleScheduleOption = (value) => {
    if (value === "Sechedule It") {
      setShowDatePicker(true);
    }
  };

  const handleRadioChange = (event) => {
    setTransportType(event.target.value);
  };
  console.log(data);
  console.log(Object.keys(data.jobs[0]).length);
  // SWAPING REQUEST

  let count = useSelector((state) => state.GenralDataSlice.count);
  let load = useSelector((state) => state.GenralDataSlice.load);
  const requestSwaping = () => {
    try {
      dispatch(CreateOperaions(finalData));
      dispatch(updateCount(1));
      if (count === load) {
        dispatch(resetCount());
        dispatch(resetLoad());
        navigate("/move-epack");
      } else {
        navigate("/select-epack");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // GETTING DRIVERS
  const drivers = useSelector((state) => state.DriversSlice.drivers);
  const driversName = drivers.map((obj) => obj.driver_name);
  useEffect(() => {
    dispatch(GetLocations());
    dispatch(GetAllDrivers(1));
  }, [dispatch]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Grid container sx={{ mb: 5, background: "white", padding: "1rem" }}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "block",
              xs: "block",
            },
          }}
        >
          <Stack mb={2}>
            <Navigation
              breadcrumbsData={[
                {
                  link: "/operations",
                  text: "Operations",
                },
                {
                  link: "/",
                  text: "Select E-Pack",
                },
              ]}
            />
          </Stack>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xl={3}
            lg={3}
            md={3}
            sm={4}
            xs={12}
            sx={{ backgroundColor: "#e7e7e7", padding: "0 0 0 1rem" }}
          >
            <VerticalLinearStepper />
          </Grid>
          <Grid item xl={9} lg={9} md={9} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <Stack mb={2}>
                  <Navigation
                    breadcrumbsData={[
                      {
                        link: "/operations",
                        text: "Operations",
                      },
                      {
                        link: "/",
                        text: "Select Driver",
                      },
                    ]}
                  />
                </Stack>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Typography variant="h3" mb={2}>
                      Step 2.{count} Select Driver
                    </Typography>
                    <Stack
                      mb={2}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <DriverRadioGroup
                        selectedValue={transportType}
                        options={[{ label: "Manual", value: "manual" }]}
                        onRadioChange={handleRadioChange}
                      />
                    </Stack>
                    <Stack mb={2}>
                      <LocationView />
                    </Stack>
                    <Box
                      sx={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Stack mb={2} width={"100%"}>
                        <SelectDriverSlider />
                      </Stack>
                      <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                        width={"100%"}
                        gap={2}
                      >
                        <DriverPageMenu
                          label={"DRIVER"}
                          btnText={"Diana Rotchen"}
                          options={driversName}
                          onSelectChange={handleDriver}
                        />
                        <Stack
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          flexDirection={"row"}
                          width={"100%"}
                        >
                          <Box
                            sx={{
                              width: "50%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Typography variant="body2" fontSize={"0.8rem"}>
                              URGENT
                            </Typography>
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              value="urgent"
                              onChange={handleCheckboxChange}
                            />
                          </Box>
                        </Stack>
                        <Stack width={"100%"}>
                          <DriverPageMenu
                            label={"Schedule operation"}
                            btnText={"Now"}
                            options={["Now", "Sechedule It"]}
                            onSelectChange={handleScheduleOption}
                          />

                          {showDatePicker && (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DateAndTime
                                onDateTimeChange={handleDateTimeChange}
                              />
                              <Button
                                color="error"
                                sx={{
                                  border: "none",
                                  padding: "0",
                                  margin: "0",
                                }}
                                onClick={() => {
                                  setShowDatePicker(false);
                                }}
                              >
                                Cancel X
                              </Button>
                            </LocalizationProvider>
                          )}
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Box mb={"2rem"}>
                      {Object.keys(data.jobs[1]).length > 2 ? (
                        <JoinPacks data={data?.jobs} />
                      ) : Object.keys(data?.jobs[0]).length > 1 ? (
                        <EpackAndDriverInfoCard
                          data={data?.jobs[0]}
                          icon={emptyBattery}
                          title={"E-Pack"}
                        />
                      ) : null}
                    </Box>
                    {driverInfo.length !== 0 && (
                      <EpackAndDriverInfoCard
                        data={driverInfo}
                        icon={bus}
                        title={"Driver"}
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Stack
              sx={{
                marginTop: "2rem",
              }}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              flexDirection={"row"}
              width={"100%"}
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
                onClick={() => navigate("/select-epack")}
                startIcon={<ChevronLeft />}
              >
                Previous
              </Button>
              <Typography color={"#88B14B"}>
                Estimated operation time 100 min.
              </Typography>
              <Button
                endIcon={<ChevronRight />}
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
                onClick={requestSwaping}
              >
                Request Swapping
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
