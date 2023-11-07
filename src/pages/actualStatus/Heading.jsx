import { Box, Typography } from "@mui/material";

export const Heading = ({ variant, children, style }) => (
  <Typography style={{ ...style }} variant={variant}>
    {children}
  </Typography>
);
