import { Stack, Typography } from "@mui/material";

export const ESourceDetailContainer = ({
  topHeading,
  mainHeading,
  icon,
  subHeading,
  v,
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mb={5}
    >
      <Typography
        variant="overline"
        component="p"
        mb={1}
        sx={{ textTransform: "uppercase", color: "#7a7a7a" }}
      >
        {topHeading}
      </Typography>
      <img src={icon} alt={icon} style={{ width: "70px", maxHeight: "70px" }} />
      <Typography variant="h2" component="h2" sx={{ color: "#7a7a7a" }}>
        {mainHeading}
      </Typography>
      <Typography variant="body1" component="p" sx={{ color: "#7a7a7a" }}>
        {subHeading}
      </Typography>
    </Stack>
  );
};
