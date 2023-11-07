import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import check from "../../../assets/Icons/check.svg";
import { StyledMenu } from "../../../theme/theme";
export const DriverPageMenu = ({
  options,
  btnText,
  label,
  onSelectChange,
  value,
  name,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(true);
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
      <input type="hidden" name={name} value={value} />
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              textAlign: "start",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              fontSize: "0.8rem",
              marginBottom: {
                xl: "10",
                lg: "10",
                md: "10px",
                sm: "10px",
                xs: "10px",
              },
            }}
            width={"50%"}
            textTransform={"uppercase"}
          >
            {label}
          </Typography>

          {label === "DRIVER" && (
            <>
              <Typography variant="body2" fontSize={"0.8rem"}>
                Show only available drivers
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: checked ? "#BADA55" : "white",
                  position: "relative",
                  border: "1px solid #ddd",
                }}
                component={"button"}
                onClick={() => setChecked(!checked)}
              >
                {checked && (
                  <img
                    src={check}
                    alt="check"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "18px",
                      height: "18px",
                    }}
                  />
                )}
              </Box>
            </>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          marginBottom: {
            xl: "2rem",
            lg: "1rem",
            md: "1rem",
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
            padding: "5px 10px",
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
          {label === "DRIVER" && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              {selectedItem || btnText}
              <span>
                <Typography color={"#BADA55"}>Available</Typography>
              </span>
            </div>
          )}
          {label !== "DRIVER" && (selectedItem || btnText)}
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
        sx={{
          width: { lg: btnText === "E-Source" ? "26%" : "38%", sm: "67%" },
        }}
      >
        {options?.map((option, index) => (
          <MenuItem
            onClick={() => handleMenuItemClick(option)}
            disableRipple
            key={index}
            sx={{ width: "100%" }}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </Grid>
  );
};
