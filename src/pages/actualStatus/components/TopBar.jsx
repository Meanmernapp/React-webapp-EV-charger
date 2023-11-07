import { Box, Stack, Typography } from "@mui/material";
import "./TopBar.scss";
export const TopBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        flexWrap: "wrap",
      }}
      mb={2}
    >
      <Box
        className="top-bar-item-box top-bar-item-box-padding"
        sx={{
          borderRight: {
            xl: "1px solid #ddd",
            lg: "1px solid #ddd",
            md: "1px solid #ddd",
            sm: "none",
            xs: "none",
          },
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "0",
        }}
      >
        <Typography variant="body2">UUID</Typography>
        <Typography variant="body2" color={"black"}>
          acd0739
        </Typography>
      </Box>
      <Box
        className="top-bar-item-box top-bar-item-box-padding"
        sx={{
          borderRight: {
            xl: "1px solid #ddd",
            lg: "1px solid #ddd",
            md: "1px solid #ddd",
            sm: "none",
            xs: "none",
          },
          paddingLeft: { xs: 0 },
        }}
      >
        <Typography variant="body2">MANUFACTURER</Typography>
        <Typography variant="body2" color={"black"}>
          SICON
        </Typography>
      </Box>
      <Box
        className="top-bar-item-box top-bar-item-box-padding"
        sx={{
          borderRight: {
            xl: "1px solid #ddd",
            lg: "1px solid #ddd",
            md: "1px solid #ddd",
            sm: "none",
            xs: "none",
          },
          paddingLeft: { xs: 0 },
        }}
      >
        <Typography variant="body2">PRODUCT</Typography>
        <Typography variant="body2" color={"black"}>
          GRES 300/200
        </Typography>
      </Box>
      <Box
        className="top-bar-item-box top-bar-item-box-padding"
        sx={{
          paddingLeft: { xs: 0 },
        }}
      >
        <Typography variant="body2">ITEM NUMBER</Typography>
        <Typography variant="body2" color={"black"}>
          1234567
        </Typography>
      </Box>
    </Stack>
  );
};
