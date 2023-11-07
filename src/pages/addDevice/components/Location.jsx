import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../AddDevice.scss";
import CustomMenu from "./CustomMenu";
import Locations from "../../location/Locations";
import { GetLocations } from "../../../services/location/LocationApi";
import { useDispatch, useSelector } from "react-redux";
const Location = ({ onUpdateState }) => {
  const dispatch = useDispatch();
  const [clusterId, setClusterId] = useState({ cluster_id: null });
  const clusters = useSelector((state) => state.LocationSlice.locationData[0]);
  useEffect(() => {
    dispatch(GetLocations());
  }, [dispatch]);
  const handleClusterId = (selectedValue) => {
    let cluster = clusters.find((item) => item.cluster?.name === selectedValue);
    console.log(cluster)
    setClusterId({ cluster_id: cluster?.cluster.id });
  }
  useEffect(() => {
    onUpdateState(clusterId);
  }, [clusterId]);
  const clusterNames = clusters?.map((cluster) => cluster?.cluster?.name);
  return (
    <Stack>
      <Typography variant="h3" mb={3}>
        Location
      </Typography>

      <Grid container mb={3} spacing={3}>
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="add-device-custom-menu-container"
        >
          <CustomMenu
            label={"Cluster"}
            btnText={"Select Cluster"}
            options={clusterNames}
            onSelectChange={handleClusterId}
          />
        </Grid>
        <Grid
          item
          xl={1}
          lg={1}
          md={1}
          sm={12}
          xs={12}
          className="add-device-custom-menu-container"
        >
          <Locations />
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Location;
