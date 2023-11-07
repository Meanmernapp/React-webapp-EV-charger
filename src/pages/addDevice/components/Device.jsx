import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTextField } from "./CustomTextField";
import CustomMenu from "./CustomMenu";

const Device = ({ onSelectChange, onUpdateState, selectedOption }) => {
  const [device, setDevice] = useState({
    device_type: "",
    device_name: "",
    device_manufacturer: "",
    device_lat: null,
    device_lng: null,
    capacity: "",
  });
  const handleDeviceChange = (e) => {
    setDevice((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    device.device_type = selectedOption;
    onUpdateState(device);
  }, [device]);
  return (
    <Stack mb={3} sx={{ borderBottom: "2px solid #eaeaea" }}>
      <Typography variant="h3" mb={3}>
        Device
      </Typography>
      <Grid container mb={3} sx={{ flexWrap: "wrap" }} spacing={3}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomMenu
            label={"Type"}
            btnText={"Select"}
            options={["E-Pack", "EV-Charger"]}
            value={device.device_type}
            onSelectChange={onSelectChange}
            handleChange={handleDeviceChange}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextField
            placeholder={"Type Name"}
            id={"device_name"}
            label={"Name"}
            value={device.device_name}
            name={"device_name"}
            handleChange={handleDeviceChange}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextField
            placeholder={"Type Manfacturer"}
            id={"device_manufacturer"}
            label={"Manfacturer"}
            value={device.device_manufacturer}
            name={"device_manufacturer"}
            handleChange={handleDeviceChange}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextField
            placeholder={"Type Lat"}
            id={"device_lat"}
            label={"Lat"}
            value={device.device_lat}
            name={"device_lat"}
            handleChange={handleDeviceChange}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextField
            placeholder={"Type Long"}
            id={"device_lng"}
            label={"Long"}
            value={device.device_lng}
            name={"device_lng"}
            handleChange={handleDeviceChange}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextField
            placeholder={"Type Capacity"}
            id={"capacity"}
            label={"Capacity"}
            value={device.capacity}
            name={"capacity"}
            handleChange={handleDeviceChange}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Device;
