import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { getPrimayStatusColors, getStatusHolderBg } from "../../../utils/getColorsWithVariants";


export const StatusHolder = ({ statusHeading, variant, status }) => {
  console.log(variant)
  return (
    <Stack direction="row" columnGap={2} alignItems="center">
      <Typography variant="h4" component="h4">
        {statusHeading}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          display="flex"
          alignItems="center"
          gap="0.2rem"
          variant="body2"
          textTransform={"uppercase"}
          sx={{
            background: getStatusHolderBg(variant),
            padding: ".6rem 1rem",
            color: "#000000",
            borderRadius: "18px",
          }}
        >
          <Box
            component="span"
            sx={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: getPrimayStatusColors(variant),
            }}
          ></Box>
          <Typography variant="body2" color={"black"} textTransform={"none"}>
            {variant ? variant : status}
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
