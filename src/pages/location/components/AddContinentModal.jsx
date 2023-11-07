import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { CreateContinent } from "../../../services/location/LocationApi";
import { useDispatch } from "react-redux";

export const AddContinentModal = ({
  showContinentModal,
  onOpenContinent,
  onClose,
}) => {
  const [continent, setContinent] = useState("");
  const dispatch = useDispatch();
  const handleAdd = async () => {
    try {
      dispatch(CreateContinent({ continent_name: continent }));
    } catch (error) {
      console.error("Error creating continent:", error);
    }

    onClose();
  };
  return (
    <Box>
      <Modal
        open={showContinentModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: 400,
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            background: "#fff",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <Box>
            <Typography variant="h3" mb={3}>
              Add Continent
            </Typography>

            <Box mb={3}>
              <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                <TextField
                  onChange={(e) => setContinent(e.target.value)}
                  variant="standard"
                  label="Continent Name"
                  color="warning"
                  required
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
                mb: 3,
              }}
            >
              <Button
                startIcon={<Add />}
                variant="outlined"
                sx={{
                  borderColor: "#7a7a7a",
                  color: "#7a7a7a",
                  "&:hover": {
                    color: "#9a9a9a",
                    borderColor: "#9a9a9a",
                  },
                }}
                onClick={handleAdd}
              >
                Add Continent
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Button
        onClick={() => onOpenContinent()}
        sx={{
          color: "#ccc",
          "&:hover": {
            color: "#aaa",
          },
        }}
      >
        <Add />
      </Button>
    </Box>
  );
};
