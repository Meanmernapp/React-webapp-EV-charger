import { Grid, Stack } from "@mui/material";
import React from "react";
import { ESourceDetailContainer } from "./ESourceDetailContainer";

export const ESourceDetailSideBar = ({ data }) => {
  return (
    <Stack
      width={"100%"}
      sx={{
        padding: "1rem",
        backgroundColor: "#e6e6e6",
        overflow: "100%",
        overflowY: "scroll",
      }}
    >
      <Stack direction="column" alignItems="center" mb={1}>
        {data.map((item, index) => (
          <ESourceDetailContainer
            key={index}
            topHeading={item.topHeading}
            mainHeading={item.mainHeading}
            subHeading={item.subHeading}
            icon={item.icon}
          />
        ))}
      </Stack>
    </Stack>
  );
};
