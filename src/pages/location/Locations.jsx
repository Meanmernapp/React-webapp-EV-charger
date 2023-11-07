import { Box } from "@mui/material";
import React, { useState } from "react";
import { AddClusterModal } from "./components/AddClusterModal";
const Locations = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ marginRight: 2 }}>
      <AddClusterModal
        open={openModal}
        handleClose={handleCloseModal}
        handleClick={handleClick}
      />
    </Box>
  );
};

export default Locations;
