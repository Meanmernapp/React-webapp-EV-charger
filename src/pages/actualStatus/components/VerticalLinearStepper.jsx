import React from "react";
import Typography from "@mui/material/Typography";
import refreshbrown from "../../../assets/Icons/refreshbrown.svg";
import "./CustomStepper.scss";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

const steps = [
  {
    label: "Transportation to POS",
    description: "Charging in transport",
    status: `Charging in transport`,
    time: "18|3 11:28",
  },
  {
    label: "Changing E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {
    label: "Connection to E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {
    label: "Waiting for E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {
    label: "Connection to E-Pack",
    description: "Failed",
    status: "Failed",
    time: "18|3 11:28",
  },
  {
    label: "Waiting for E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {
    label: "Waiting for E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {
    label: "Waiting for E-Pack",
    description: "Success",
    status: "Success",
    time: "18|3 11:28",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export const VerticalLinearStepper = ({ hiet }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleBoxClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(-1); // Clicking the active box again resets it
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ minHeight: "2rem", bgcolor: "#eaeaea", padding: "5px  8px" }}
      >
        <Typography variant="overline" component="h4" color={"#7c7c7c"}>
          Operations Log
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 1,
            cursor: "pointer",
          }}
        >
          <img src={refreshbrown} alt="refresh" style={{ filter: "black" }} />

          <Typography
            variant="body1"
            sx={{ marginRight: "8px", color: "#7A7A7A" }}
          >
            Update info
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={"column"}
        maxHeight={"100vh"}
        overflow={"hidden"}
        sx={{
          overflowY: "scroll",
          borderTop: "1px solid #ddd",
          padding: "10px  0px",
        }}
      >
        {steps.map((item, index) => (
          <Box
            sx={{
              padding: "0px  8px",
              display: "flex",
              cursor: "pointer",
              transition: "0.5s all ease-in-out",
              "&:hover": {
                backgroundColor:
                  item.label && item.description && item.status && item.time
                    ? "#f7f7f7"
                    : "none",
              },
            }}
            key={index}
            onClick={() => handleBoxClick(index)}
          >
            <Box width={40}>
              <Typography variant="body2">{item.time}</Typography>
            </Box>
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                borderLeft: "1px solid black",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {item.label && item.status && item.description && (
                  <Box
                    sx={{
                      width: activeIndex === index ? "12px" : "10px",
                      height: activeIndex === index ? "12px" : "10px",
                      borderRadius: "100%",
                      border: "1px solid",
                      borderColor: "black",
                      position: "absolute",
                      left: activeIndex === index ? "-6px" : "-5px",
                      top: index === 0 ? "0" : "3px",
                      backgroundColor:
                        activeIndex === index ? "#1A73E8" : "white",
                    }}
                    component="div"
                  ></Box>
                )}
                <Box
                  sx={{
                    minHeight: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      mb: 1,
                      marginLeft: "10px",
                      color: "black",
                    }}
                  >
                    {item?.label}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      marginLeft: "10px",
                      color:
                        item.status === "Success"
                          ? "#71953E"
                          : item.status === "Failed"
                          ? "#FF553E"
                          : "#1A73E8",
                    }}
                  >
                    {item?.status}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
