import { Box, Stack, Typography } from "@mui/material";
import "./StatusEnergyDetail.scss";
export const StatusEnergyDetail = () => {
  return (
    <Stack direction="row" className="status-energy-detail-container" mb={3}>
      <Stack direction="column">
        <Typography
          sx={{ color: "#BADA55", textTransform: "uppercase" }}
          variant="h3"
          component="h3"
          mb={1}
        >
          Energy
        </Typography>
        <Typography
          sx={{ color: "#1e1e1e", textTransform: "uppercase" }}
          variant="body2"
          component="body2"
        >
          Available Energy
        </Typography>
        <Typography sx={{ color: "#1e1e1e" }} variant="body2" component="body2">
          250KWh/300KWh
        </Typography>
      </Stack>
    </Stack>
  );
};
