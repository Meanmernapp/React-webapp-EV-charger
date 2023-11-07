import { Stack, Typography } from "@mui/material";

export const LocationFooter = ({ icon, location, text }) => {
  return (
    <Stack>
      {icon && (
        <Stack direction="row" mb={1}>
          <img
            src={icon}
            alt="grayGrid"
            style={{ width: "20px", height: "20px", marginRight: 8 }}
          />
          <Typography variant="body2" color={"#000"}>
            {location || "Saalweg 26, 34270 Schauenburg"}
          </Typography>
        </Stack>
      )}
      {location && (
        <Typography variant="body2" component="p" textTransform="uppercase">
          Additional information
        </Typography>
      )}
      {text && (
        <Typography variant="body2" component="p" color={"#000"}>
          {text || "Text..."}
        </Typography>
      )}
    </Stack>
  );
};
