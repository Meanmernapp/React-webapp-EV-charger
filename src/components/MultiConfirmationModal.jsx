import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import { Modal } from "@mui/base/Modal";
import { Button, Stack, Typography } from "@mui/material";

export const MultiConfirmationModal = ({
  setOpenConfirmDelete,
  heading,
  subHeading,
  btns,
  haveChildModal,
  Child,
}) => {
  const getColors = (variant) => {
    //variants for the buttons color
    switch (variant) {
      case "primary":
        return {
          color: "white",
          background: "blue",
          "&:hover": {
            color: "blue",
            boxShadow: "0px 0px 30px blue",
            background: "white",
          },
        };
      case "secondary":
        return {
          color: "white",
          background: "grey",
          "&:hover": {
            color: "grey",
            boxShadow: "0px 0px 30px grey",
            background: "white",
          },
        };
      case "warning":
        return {
          color: "white",
          background: "yellow",
          "&:hover": {
            color: "yellow",
            boxShadow: "0px 0px 30px yellow",
            background: "white",
          },
        };
      case "success":
        return {
          color: "white",
          background: "green",
          "&:hover": {
            color: "green",
            boxShadow: "0px 0px 30px green",
            background: "white",
          },
        };
      case "danger":
        return {
          color: "white",
          background: "red",
          "&:hover": {
            color: "red",
            boxShadow: "0px 0px 30px red",
            background: "white",
          },
        };
      default:
        return {
          color: "white",
          background: "blue",
          "&:hover": {
            color: "blue",
            boxShadow: "0px 0px 30px blue",
            background: "white",
          },
        };
    }
  };

  const handleOpen = () => {
    setOpenConfirmDelete(true);
  };
  const handleClose = () => {
    setOpenConfirmDelete(!setOpenConfirmDelete);
  };

  return (
    <StyledModal
      open={handleOpen} 
      slots={{ backdrop: StyledBackdrop}}
    >
      <Box sx={style}>
        <Typography variant="h3" textAlign={"center"} mb={3} color={"green"}>
          {heading}
        </Typography>
        <Typography variant="body1" mb={3}>
          {subHeading}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          {btns &&
            btns.map((_, index) => (
              <Button
                key={index}
                onClick={_?.action}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 2rem",
                  borderRadius: "25px",
                  textTransform: "none",
                  ...getColors(_?.variant),
                }}
              >
                {_?.text}
              </Button>
            ))}
        </Stack>
        {haveChildModal && Child}
      </Box>
    </StyledModal>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: 500,
  borderRadius: "12px",
  padding: "3rem",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});
