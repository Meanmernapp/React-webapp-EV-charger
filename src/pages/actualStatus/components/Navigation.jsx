import { Box, Stack, Typography } from "@mui/material";
import { CustomBreadcrumbs } from "../../../components/CustomBreadcrumbs";
import refresh from "../../../assets/Icons/refreshbrown.svg";
import setting from "../../../assets/Icons/setting.svg";
import grayPhone from "../../../assets/Icons/grayPhone.svg";

import { LastCheckupBar } from "./LastCheckupBar";

export const Navigation = ({ breadcrumbsData }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
      }}
    >
      <CustomBreadcrumbs breadcrumbsData={breadcrumbsData} />

      <LastCheckupBar
        icon1={refresh}
        icon2={grayPhone}
        text1={"Update data"}
        text2={"Contact Manteinance"}
      />
    </Stack>
  );
};
