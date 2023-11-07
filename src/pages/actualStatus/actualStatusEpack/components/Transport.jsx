import { Box, Stack, Typography } from "@mui/material";
import "./Connections.scss";
export const Transport = () => {
  return (
    <Stack direction="column">
      <Typography variant="h3" color={"#BADA55"} mb={1}>
        Transport
      </Typography>
      <Box className="connections-item-center">
        <Typography>Transport Id</Typography>
        <Typography>Name of driver</Typography>
        <Typography>Time </Typography>
      </Box>
    </Stack>
  );
};
