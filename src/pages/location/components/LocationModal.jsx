// LocationModal.js
import React, { useState } from "react";
import {
  Box,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import Countries from "./Countries";
import "../Location.scss";
import { useDispatch } from "react-redux";
import { AddClusterModal } from "./AddClusterModal";
const continent_name = [
  { label: "Asia", id: 1 },
  { label: "Africa", id: 2 },
  { label: "Europe", id: 3 },
  { label: "North America", id: 4 },
  { label: "South America", id: 5 },
  { label: "Australia", id: 6 },
  { label: "Antartica", id: 7 },
];

const LocationModal = ({
  open,
  handleClose,
  selectedOption,
  setCountry,
  continent,
  setContinent,
  cluster,
  setCluster,
  handleAdd,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className="location-add-modal ">
        <Typography id="modal-title" variant="h4" component="h4" mb={3}>
          {selectedOption}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LocationModal;
