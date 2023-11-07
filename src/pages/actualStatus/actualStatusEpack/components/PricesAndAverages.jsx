import { Stack, Typography } from "@mui/material";

export const PricesAndAverages = ({ topHeading, mainHeading }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mb={5}
    >
      <Typography
        variant="h5"
        component="h5"
        mb={2}
        sx={{ textTransform: "uppercase", color: "#353535" }}
      >
        {topHeading}
      </Typography>
      <Typography variant="h2" component="h2" sx={{ color: "#353535" }}>
        {mainHeading}
      </Typography>
    </Stack>
  );
};
