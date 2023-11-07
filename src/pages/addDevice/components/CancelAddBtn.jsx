import { Button, Stack } from "@mui/material";
import "./CancelAddBtn.scss";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useState } from "react";
export const CancelAddBtn = () => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  // states to open multiple modals
  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-end"}
      width={"100%"}
      gap={"2rem"}
      sx={{
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
        },
      }}
    >
      <button className="add-device-cancel-button">Cancel</button>
      <button
        className="add-device-add-button"
        onClick={() => setOpenConfirmDelete(true)}
      >
        Add Device
      </button>
      <ConfirmationModal
        confirmationMessage="You are adding a new device. Make sure all data is correct"
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={() => setOpenConfirmDelete(false)}
        open={openConfirmDelete}
        colorCode="green"
        confirm="confirm"
      />
    </Stack>
  );
};
