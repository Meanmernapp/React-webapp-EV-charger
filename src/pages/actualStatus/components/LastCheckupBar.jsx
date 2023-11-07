import { Box, Stack, Typography } from "@mui/material";
import "./LastCheckupBar.scss";
export const LastCheckupBar = ({ date, icon1, text1, icon2, text2 }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <Stack
      direction="row"
      gap="1rem"
      rowGap={"0"}
      sx={{
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
        },
      }}
    >
      <Box className="last-checkupbar-center-container">
        <Typography variant="overline" color={"#8D8D8D"}>
          Last Checkup
        </Typography>
        <Typography variant="body1" sx={{ marginRight: "8px" }}>
          {date || Date.now()}
        </Typography>
      </Box>
      <Box className="last-checkupbar-main-container">
        <Box className="last-checkupbar-center-container">
          <img src={icon1} alt={icon1} onClick={refreshPage} />

          <Typography variant="body1" color={"#8D8D8D"}>
            {text1}
          </Typography>
        </Box>
        <Box className="last-checkupbar-center-container">
          <img src={icon2} alt={icon2} />

          <Typography variant="body1" color={"#8D8D8D"}>
            {text2}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
