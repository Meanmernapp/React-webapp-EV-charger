import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { StyledMenu } from "../../../theme/theme";

const CustomMenu = ({ options, btnText, label, setDevice, onSelectChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    onSelectChange(item);
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
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
          width={"50%"}
        >
          {label}
        </Typography>
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={12}
        sm={12}
        xs={12}
        sx={{
          marginBottom: {
            xl: "0",
            lg: "0",
            md: "0",
            sm: "10px",
            xs: "10px",
          },
        }}
      >
        <Button
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
          sx={{
            border: "1px solid #eaeaea",
            color: selectedItem ? "black" : "#9c9c9c",
            maxWidth: "100%",
            padding: "5px",
            justifyContent: "space-between",
            textTransform: "capitalize",
            width: "100%",
            "&:hover": {
              borderColor: "#7a7a7a",
              color: "#7a7a7a",
            },
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {selectedItem || btnText}
        </Button>
      </Grid>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {options?.map((option, index) => (
          <MenuItem
            onClick={() => handleMenuItemClick(option)}
            disableRipple
            key={index}
            sx={{ width: "100%" }}
          >
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </Grid>
  );
};
export default CustomMenu;
