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
import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import { Add, Cancel, RoundedCorner } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateCountry,
  GetContinents,
  GetLocations,
} from "../../../services/location/LocationApi";
import { AddContinentModal } from "./AddContinentModal";

export const AddCountryModal = ({
  continent,
  setContinent,
  open,
  onOpen,
  handleClick,
  showContinentModal,
  onClose,
  onOpenContinent,
}) => {
  const [country, setCountry] = useState("");
  const continents = useSelector(
    (state) => state.LocationSlice.locationData[0]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLocations());
  }, [dispatch]);
  const handleAdd = () => {
    console.log(continent);
    dispatch(
      CreateCountry({
        country_name: country,
        continent_id: continent,
      })
    );
  };
  const uniqueContinentObjects = continents?.reduce((acc, obj) => {
    const isUnique = !acc.some((item) => item.id === obj.continent.id);
    if (isUnique) {
      acc.push(obj.continent);
    }
    return acc;
  }, []);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClick}
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
          <>
            <Typography variant="h3" mb={3}>
              Add Country
            </Typography>

            <Box mb={3}>
              <InputLabel id="select-continent" sx={{ mb: 2 }}>
                Continent
              </InputLabel>
              <Box sx={{ display: "flex" }}>
                <Select
                  id="continent"
                  value={continent > 0 && continent}
                  onChange={(e) => setContinent(e.target.value)}
                  color="warning"
                  sx={{ width: "100%", color: "black" }}
                  variant="outlined"
                >
                  <MenuItem disabled>Select Continent</MenuItem>
                  {uniqueContinentObjects?.map(({ name, id }, index) => (
                    <MenuItem value={id} key={index}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <AddContinentModal
                  showContinentModal={showContinentModal}
                  onClose={onClose}
                  onOpenContinent={onOpenContinent}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
              <TextField
                onChange={(e) => setCountry(e.target.value)}
                variant="standard"
                label="Country Name"
                color="warning"
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
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
                Add Country
              </Button>
            </Box>
          </>
        </Box>
      </Modal>
      <Box className="location-add-btn-box">
        <Button
          onClick={() => onOpen()}
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
    </Box>
  );
};
