import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { DriverPageMenu } from "../components/DriverPageMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCluster,
  GetLocations,
} from "../../../services/location/LocationApi";
import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../../actualStatus/components/Navigation";
import { VerticalLinearStepper } from "../../actualStatus/components/VerticalLinearStepper";
import { DriverRadioGroup } from "../components/DriverRadioGroup";
import { JoinPacks } from "../packJoins/JoinPacks";
import SelectDriverSlider from "../selectDriver/components/SelectDriverSlider";
import "./SelectEpack.scss";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import { EpackAndDriverInfoCard } from "../selectDriver/components/EpackAndDriverInfoCard";
import emptyBattery from "../../../assets/Icons/emptyBattery.svg";
import {
  getCount,
  insertLoad,
  updateData,
} from "../../../services/genralData/GenralDataSlice";
import {
  GetAllEpacks,
  GetAllEsource,
} from "../../../services/epackEsource/EpackEsourceApi";

const data = [
  { key: "Capacity", value: "200kWh" },
  { key: "Available Energy", value: "250kWh/300kWh" },
  { key: "SOc", value: "55%" },
  { key: "Location", value: "24-Autohof Lutterberg" },
  { key: "Last Activity", value: "Mon 27 Sept 14.52" },
  { key: "Charger", value: "Thomas" },
];
export const SelectEpack = () => {
  const dispatch = useDispatch();
  const [pack, setEpack] = useState([{}, {}]);
  const [radioValue, setRadioValue] = useState("swap");
  const [formData, setFormData] = useState({
    truck_load: 1,
    type: "swap",
    driver_id: 1,
    cluster_id: 1,
    location: undefined,
    is_urgent: false,
    scheduled_at: undefined,
    jobs: [{}, {}],
  });
  const navigate = useNavigate();

  // GET CLUSTERS

  const clusters = useSelector((state) => state.LocationSlice.clusterData[0]);
  const clusterNames = clusters?.map((cluster) => cluster?.cluster_name);

  // HANDLE TRUCK LOAD

  const handleRadioValue = (event) => {
    const num = parseInt(event.target.value);
    if (num === 1 || num === 2 || num === 3) {
      dispatch(insertLoad(num));
      setFormData({ ...formData, truck_load: num });
    } else {
      setRadioValue(event.target.value);
      setFormData({ ...formData, type: event.target.value });
    }
  };
  const handleNext = () => {
    dispatch(updateData(formData));
    navigate("/select-driver");
  };

  // CLUSTER ID

  const handleCluster = (item) => {
    const cluster = clusters.find((obj) => obj.cluster_name === item);
    const newData = {
      ...formData,
      cluster_id: cluster.id,
    };
    setFormData(newData);
  };

  // HANDLE E-SOURCE

  const locations = useSelector(
    (state) => state.EpackEsourceSlice.allEsource[0]
  );
  const locationsName = locations?.map((obj) => obj.sourcename);
  // HANDLE DISCHARGED
  const epacks = useSelector((state) => state.EpackEsourceSlice.epacks[0]);
  const handleDischarged = (item) => {
    const selectedEpack = epacks.find((epack) => epack.e_packname === item);
    setEpack([selectedEpack, pack[1]]);
    if (selectedEpack) {
      setFormData({
        ...formData,
        jobs: [
          {
            ...formData.jobs[0],
            discharged_epack_id: selectedEpack.id,
            charged_epack_id: 4,
            e_source_id: 3,
          },
          { ...formData.jobs[1] },
        ],
      });
    }
  };
  const number = useSelector(getCount);
  const epackNames = epacks?.map((obj) => obj?.e_packname);
  const id = formData?.jobs?.map((obj) => obj.discharged_epack_id);
  const chargeEpacks = epacks?.filter((obj) => obj.id !== id[0]);
  const chargedEpacksNames = chargeEpacks?.map((obj) => obj?.e_packname);
  useEffect(() => {
    dispatch(GetCluster());
    dispatch(GetLocations());
    dispatch(GetAllEsource());
    dispatch(GetAllEpacks());
  }, [dispatch]);
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
            sx={{ backgroundColor: "#e7e7e7" }}
          >
            <VerticalLinearStepper />
          </Grid>
          <Grid item xl={9} lg={9} md={9} sm={8} xs={12}>
            <form id="test">
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
                          text: "Select E-Pack",
                        },
                      ]}
                    />
                  </Stack>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                      <Typography variant="h3" mb={2}>
                        Step 1.{number} Select E-Pack
                      </Typography>
                      <Stack
                        mb={2}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                      >
                        <DriverRadioGroup
                          options={[
                            { label: "1", value: "1" },
                            { label: "2", value: "2" },
                            { label: "3", value: "3" },
                            // { label: "Truck Load", value: "load" },
                          ]}
                          name="truckLoad"
                          checked={true}
                          selectedValue={formData.truck_load}
                          onRadioChange={handleRadioValue}
                        />
                        <DriverRadioGroup
                          name="type"
                          options={[
                            { label: "Swap", value: "swap" },
                            {
                              label: "Recharge one E-Pack",
                              value: "recharge-epack",
                            },
                          ]}
                          selectedValue={formData.type}
                          onRadioChange={handleRadioValue}
                        />
                      </Stack>
                      <Box
                        sx={{
                          flexDirection: "column",
                        }}
                        className="center"
                      >
                        <Stack
                          justifyContent={"center"}
                          alignItems={"flex-start"}
                          width={"100%"}
                          gap={2}
                        >
                          <DriverPageMenu
                            label={"CLUSTER"}
                            btnText={"Select Cluster"}
                            name="cluster_id"
                            options={clusterNames}
                            value={formData?.clutser}
                            onSelectChange={handleCluster}
                          />
                          <DriverPageMenu
                            label={"Location"}
                            name="location"
                            btnText={"24h Autohof Lutterberg"}
                            options={locationsName}
                            value={formData?.location}
                            onSelectChange={(item) =>
                              setFormData({ ...formData, location: item })
                            }
                          />
                          <DriverPageMenu
                            label={"Discharged E-Pack"}
                            name="discharged_epack_id"
                            btnText={"E-Pack Edison (100% Charged)"}
                            options={epackNames}
                            value={formData?.discharged}
                            onSelectChange={handleDischarged}
                          />
                          <Box
                            sx={{
                              flexDirection: "row",
                              mb: 2,
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                width: "50%",
                                textTransform: "uppercase",
                                fontSize: ".8rem",
                              }}
                            >
                              Select From
                            </Typography>

                            <DriverPageMenu
                              label={""}
                              name="e_source_id"
                              btnText={"E-Source"}
                              options={["POS", "E-Source"]}
                              value={formData?.type}
                              onSelectChange={(item) =>
                                setFormData({ ...formData, e_source_id: item })
                              }
                            />
                          </Box>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          flexDirection: "column",
                        }}
                        className="center"
                      >
                        <Stack mb={2} width={"100%"}>
                          <SelectDriverSlider />
                        </Stack>
                        {radioValue === "swap" && (
                          <Stack width={"100%"} mb={2}>
                            <DriverPageMenu
                              label={"Charged E-Pack"}
                              value={formData?.charged}
                              name="charged_epack_id"
                              btnText={"Select E-Pack(Last 10/1//23)"}
                              options={chargedEpacksNames}
                              onSelectChange={(item) => {
                                const epack = epacks.find(
                                  (obj) => obj?.e_packname === item
                                );
                                setEpack([{ ...pack[0] }, epack]);
                                setFormData({
                                  ...formData,
                                  jobs: [
                                    { ...formData.jobs[0] },
                                    {
                                      ...formData.jobs[1],
                                      charged_epack_id: epack.id,
                                      e_source_id: 3,
                                      discharged_epack_id:
                                        formData.jobs[0].discharged_epack_id,
                                    },
                                  ],
                                });
                              }}
                            />
                          </Stack>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                      <Stack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        {radioValue === "swap" &&
                        pack &&
                        Object.keys(pack[0]).length > 0 ? (
                          <JoinPacks data={pack} />
                        ) : radioValue !== "swap" &&
                          pack &&
                          Object.keys(pack[0]).length > 0 ? (
                          <EpackAndDriverInfoCard
                            icon={emptyBattery}
                            data={pack[0]}
                            title={"E-Pack Edison"}
                          />
                        ) : null}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "#88b14b",
                    minWidth: "10rem",
                    borderRadius: "8px",
                    border: "1px solid #88b14b",
                    "&:hover": {
                      color: "#88b14b",
                      background: "#fff",
                    },
                  }}
                  endIcon={<ChevronRight />}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
