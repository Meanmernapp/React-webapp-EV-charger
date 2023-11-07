import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBarMap from "../components/SideBarMap";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { alignProperty } from "@mui/material/styles/cssUtils";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "../pages/mapView/mapview.scss";

const SidebarLayout = () => {
  const [sidbarBarCollape, setSidbarCollape] = useState(false);
  const { getHeaderHeight } = useSelector((state) => state.SharedSlice);
  const mapViewHeight = `calc(100vh - ${getHeaderHeight}px)`;
  const isSmallerScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );

  const { sidebar } = useSelector((state) => state.UiSlice);

  return (
    <Stack direction="row">
      {/* sidebar */}
      <Stack
        width={sidbarBarCollape ? "20px" : "310px"}
        height={mapViewHeight}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          display: isSmallerScreen ? "none" : "flex",
          overflow: "hidden",
          position: "relative",
          transition: "ease-in 1s",
        }}
      >
        {!sidbarBarCollape && (sidebar ? sidebar : <SideBarMap />)}

        <Box
          sx={{
            position: "absolute",
            top: "4px",
            right: "0px",
            cursor: "pointer",
            // background: "#f9f9f9",
            width: "20px",
            height: "20px",
            // borderRadius:"50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSidbarCollape(!sidbarBarCollape)}
        >
          {sidbarBarCollape ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </Box>
      </Stack>
      {/* outlet */}
      <Stack width="100%" height={mapViewHeight}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default SidebarLayout;
