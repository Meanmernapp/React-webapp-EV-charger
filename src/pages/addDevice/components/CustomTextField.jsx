import { styled } from "@mui/material/styles";
import { Grid, TextField, Typography } from "@mui/material";

const BootstrapInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
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

export const CustomTextField = ({
  label,
  placeholder,
  name,
  handleChange,
  value,
  id,
}) => {
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
      <Grid item xl={4} lg={4} md={8} sm={12} xs={12}>
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
      </Grid>
      <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
        <BootstrapInput
          placeholder={placeholder}
          id={id}
          onChange={handleChange}
          sx={{ width: "100%" }}
          name={name}
          value={value || ""}
        />
      </Grid>
    </Grid>
  );
};
