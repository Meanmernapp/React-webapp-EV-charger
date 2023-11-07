import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import goBack from "../assets/Icons/goBack.svg";
export const CustomBreadcrumbs = ({ breadcrumbsData }) => {
  const breadcrumbItems = breadcrumbsData.map((breadcrumb, index) => {
    if (breadcrumb?.link) {
      return (
        <Link
          underline="hover"
          key={index}
          color="inherit"
          href={breadcrumb.link}
          // onClick={handleClick}
          sx={{ ".MuiLink-root": { color: "red" } }}
        >
          {breadcrumb.text}
        </Link>
      );
    } else {
      return (
        <Typography key={index} color="text.primary">
          {breadcrumb.text}
        </Typography>
      );
    }
  });

  return (
    <Stack direction="row" alignItems="center">
      <img
        src={goBack}
        alt="refresh"
        style={{ width: "30px", height: "30px" }}
      />
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbItems}
      </Breadcrumbs>
    </Stack>
  );
};
