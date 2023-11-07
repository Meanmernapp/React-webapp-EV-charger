import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";
import AutoGenratedTextFields from "./AutoGenratedTextFields";
import "../AddDevice.scss";
import React, { useState } from "react";
import { QRCodeReader } from "./QrCodeReader";
import { QrCode, ReadMoreSharp } from "@mui/icons-material";
import { useEffect } from "react";

const Configuration = ({ selectedOption, onUpdateState }) => {
  const [conf, setConf] = useState({
    config_name: "",
    config_imei: "",
    config_ip: "",
    config_modbus: "",
    config_device_id: "",
  });
  const [addCode, setAddCode] = useState({ code: "" });
  const convertBaseCode = (e) => {
    try {
      if (conf.code) {
        const decodedData = atob(conf.code);
        const parsedObject = JSON.parse(decodedData);
        const data = parsedObject.deviceConfig;
        setConf((prevState) => ({
          ...prevState,
          ...data,
        }));
      }
    } catch (error) {
      console.error("Error converting Base64 code:", error);
    }
  };

  const [openScanner, setOpenScanner] = useState(false);
  const [textField, setTextField] = useState(false);
  useEffect(() => {
    const handleClick = (e) => {
      const id = e.target.name;
      if (id !== "code" && id !== "codebtn") {
        setTextField(false);
      }
      if (e.target.id === "show") {
        console.log(true);
        setTextField(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [textField]);
  const handleScannerOpen = () => {
    setOpenScanner(true);
  };
  const handleOpenTextField = () => {
    setTextField(true);
  };
  const handleScannerClose = () => {
    setOpenScanner(false);
  };
  const handleConfChange = (e) => {
    setAddCode((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setConf((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    delete conf.code;
  };
  useEffect(() => {
    onUpdateState(conf);
  }, [conf]);
  return (
    <Stack mb={3}>
      <Typography variant="h3" mb={3}>
        Configuration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <AutoGenratedTextFields
            placeholder={"Type Name"}
            handleChange={handleConfChange}
            value={conf.config_name}
            id={"config_name"}
            label={"Name"}
            name={"config_name"}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <AutoGenratedTextFields
            placeholder={"Type IMEI"}
            handleChange={handleConfChange}
            value={conf.config_imei}
            id={"config_imei"}
            label={"EMEI"}
            name={"config_imei"}
          />
        </Grid>
        {selectedOption !== "EV-Charger" && (
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <AutoGenratedTextFields
              placeholder={"Type modbusport"}
              handleChange={handleConfChange}
              value={conf.config_modbus}
              id={"config_modbus"}
              label={"Modbus Port"}
              name={"config_modbus"}
            />
          </Grid>
        )}

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <AutoGenratedTextFields
            placeholder={"Type IP"}
            handleChange={handleConfChange}
            value={conf.config_ip}
            id={"config_ip"}
            label={"IP"}
            name={"config_ip"}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <AutoGenratedTextFields
            placeholder={"Type ID"}
            handleChange={handleConfChange}
            value={conf.config_device_id}
            id={"config_device_id"}
            label={"ID (optional)"}
            name={"config_device_id"}
          />
        </Grid>
        {selectedOption === "EV-Charger" && (
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Grid container>
              <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
                <Button
                  variant="outlined"
                  onClick={handleOpenTextField}
                  id="show"
                  sx={{
                    marginTop: "0",
                    mb: "5px",
                    padding: "4px 15px",
                    border: "1px solid #ddd",
                    color: "#9a9a9a",
                    width: "100%",
                    "&:hover": {
                      border: "1px solid #7a7a7a",
                    },
                  }}
                >
                  Code
                </Button>
              </Grid>
              <Grid item xl={1} lg={1} md={0} sm={0} xs={0}></Grid>
              <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                <Button
                  variant="outlined"
                  onClick={handleScannerOpen}
                  sx={{
                    marginTop: "0",
                    mb: "5px",
                    padding: "4px 15px",
                    textTransform: "none",
                    border: "1px solid #ddd",
                    color: "#9a9a9a",
                    width: "100%",
                    "&:hover": {
                      border: "1px solid #7a7a7a",
                    },
                  }}
                >
                  Scan QR to load Data Auto
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="add-device-scan-button-container"
        >
          {!textField && (
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Grid
                item
                xl={4}
                lg={1}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "flex",
                    xs: "flex",
                  },
                  marginBottom: {
                    xl: "0",
                    lg: "0",
                    md: "10px",
                    sm: "10px",
                    xs: "10px",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: "flex",
                    textAlign: "start",
                    alignItems: "flex-start",
                    color: "#fff",
                    justifyContent: "flex-start",
                  }}
                >
                  .
                </Typography>
              </Grid>
              <Grid item xl={8} lg={11} md={12} sm={12} xs={12}>
                <Grid container width={"100%"}>
                  {!textField && selectedOption !== "EV-Charger" && (
                    <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                      <Button
                        className="add-device-scan-button"
                        variant="outlined"
                        startIcon={<QrCode />}
                        onClick={handleScannerOpen}
                        sx={{
                          width: "100%",
                          "&:hover": {
                            border: "1px solid #7a7a7a",
                            color: "#7a7a7a",
                          },
                        }}
                      >
                        Scan QR to load data Auto
                      </Button>
                    </Grid>
                  )}
                  {!textField && selectedOption !== "EV-Charger" && (
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                      <Button
                        variant="outlined"
                        onClick={handleOpenTextField}
                        className="add-device-scan-button"
                        id="show"
                        sx={{
                          width: "100%",
                          borderRadius: "0 4px 4px 0",
                          "&:hover": {
                            border: "1px solid #7a7a7a",
                            color: "#7a7a7a",
                          },
                        }}
                      >
                        Code
                      </Button>
                    </Grid>
                  )}
                </Grid>

                {openScanner && (
                  <QRCodeReader
                    open={openScanner}
                    onClose={handleScannerClose}
                    setConf={setConf}
                  />
                )}
              </Grid>
            </Grid>
          )}
          {textField && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              <AutoGenratedTextFields
                placeholder={"Type Code"}
                handleChange={handleConfChange}
                value={addCode.code}
                id={"code"}
                label={"Code"}
                name={"code"}
                EndButton={
                  <Tooltip title={"Paste your code in the field"}>
                    <div style={{ width: "100%" }}>
                      <Button
                        disabled={conf?.code?.length < 1}
                        variant="outlined"
                        onClick={convertBaseCode}
                        id="codebtn"
                        className="add-device-scan-button"
                        sx={{
                          width: "100%",
                          borderRadius: "0 4px 4px 0",
                          "&:hover": {
                            border: "1px solid #7a7a7a",
                            color: "#7a7a7a",
                          },
                        }}
                      >
                        <ReadMoreSharp />
                      </Button>
                    </div>
                  </Tooltip>
                }
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Configuration;
