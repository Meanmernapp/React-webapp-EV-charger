import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Typography } from "@mui/material";
import "./AutoGenratedTextFields.scss";

const BootstrapInput = styled(TextField)(({ borderRadius }) => ({
  "& .MuiInputBase-input": {
    borderRadius: borderRadius || 4,
    position: "relative",
    border: "1px solid #eaeaea",
    width: "100%",
    padding: "5px",
    "&:hover": {
      border: "1px solid #7a7a7a",
    },
    color: "#7a7a7a",
    "&:focus": {
      borderColor: "#eaeaea",
      color: "#7a7a7a",
    },
    "&:active": {
      color: "#7a7a7a",
      border: "1px solid #eaeaea",
    },
  },
}));

export const Grid4x12 = ({ children }) => (
  <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
    {children}
  </Grid>
);
export const Grid8x12 = ({ EndButton, children }) => (
  <Grid
    item
    xl={EndButton ? 6 : 8}
    lg={EndButton ? 6 : 8}
    md={EndButton ? 10 : 12}
    sm={EndButton ? 10 : 12}
    xs={EndButton ? 10 : 12}
  >
    {children}
  </Grid>
);
const AutoGenratedTextFields = ({
  label,
  placeholder,
  name,
  handleChange,
  value,
  EndButton,
}) => {
  const [val, setVal] = useState(value || "");
  useEffect(() => {
    setVal(value || "");
  }, [value]);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Grid4x12>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            textAlign: "start",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginBottom: {
              xl: "0",
              lg: "0",
              md: "10px",
              sm: "10px",
              xs: "10px",
            },
          }}
        >
          {label}
        </Typography>
      </Grid4x12>
      <Grid8x12 EndButton={EndButton}>
        <BootstrapInput
          placeholder={placeholder}
          onChange={handleChange}
          id="{inputId}"
          sx={{ width: "100%", borderRadius: EndButton ? "4px 0 0 4px" : "0" }}
          name={name}
          value={val || ""}
        />
      </Grid8x12>
      {EndButton && (
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
          {EndButton}
        </Grid>
      )}
    </Grid>
  );
};
export default AutoGenratedTextFields;
