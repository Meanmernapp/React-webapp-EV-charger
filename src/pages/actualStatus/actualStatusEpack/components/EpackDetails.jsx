import { Box, Stack, Typography } from "@mui/material";
import "./EpackDetails.scss";

const DetailRow = ({ name, spec }) => (
  <Box className="epack-container-detail-row">
    <Typography sx={{ color: "#9c9c9c" }} variant="body1" component="p">
      {name}
    </Typography>
    <Typography sx={{ color: "#1E1E1E" }} variant="body1" component="p">
      {spec}
    </Typography>
  </Box>
);

export const EpackDetails = () => {
  return (
    <Stack className="epack-container" mb={3} direction='row'>
      <DetailRow name={"ID"} spec={"369132345"} />
      <DetailRow name={"PRODUCT"} spec={"GRES 300/200"} />
      <DetailRow name={"MANUFACTURER"} spec={"SICON "} />
      <DetailRow name={"ITEM NUMBER"} spec={"1234567"} />
    </Stack>
  );
};
