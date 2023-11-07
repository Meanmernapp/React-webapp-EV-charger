import React, { useEffect } from "react";
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
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { AddCountryModal } from "./AddCountryModal";
import { AddContinentModal } from "./AddContinentModal";
import {
  CreateCluster,
  GetCluster,
  GetLocations,
} from "../../../services/location/LocationApi";
import { useDispatch, useSelector } from "react-redux";
export const AddClusterModal = ({ handleClose, open, handleClick }) => {
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("0");
  const [cluster, setCluster] = useState("");
  const [countryModal, setCountryModal] = useState(false);
  const [continentModal, setContinentModal] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const dispatch = useDispatch();

  const openCountryModal = () => {
    setCountryModal(true);
  };
  const handleCloseCountryModal = () => {
    setCountryModal(false);
  };
  const openContinentModal = () => {
    setContinentModal(true);
  };
  const handleCloseCountinentModal = () => {
    setContinentModal(false);
  };
  const openClusterModal = () => {
    setCluster("");
    setCountry("");
    setContinent("");
    handleClick();
  };
  const handleAdd = async () => {
    try {
      dispatch(
        CreateCluster({
          cluster_name: cluster,
          country_id: country,
        })
      );
      dispatch(GetCluster());
    } catch (error) {
      console.error("Error creating cluster:", error);
    }

    handleClose(false);
  };
  const continents = useSelector(
    (state) => state.LocationSlice.locationData[0]
  );
  const uniqueContinentNames = continents?.reduce((acc, obj) => {
    const isUnique = !acc.some((item) => item.id === obj.continent.id);
    if (isUnique) {
      acc.push(obj.continent);
    }
    return acc;
  }, []);
  const countries = useSelector((state) => state.LocationSlice.locationData[0]);
  const uniqueCountriesNames = countries?.reduce((cont, obj) => {
    if (!cont.includes(obj?.country?.name)) {
      cont.push(obj?.country?.name);
    }
    return cont;
  }, []);
  const filterCountriesByContinent = (continent) => {
    if (continent) {
      const filteredCountries = countries
        ?.filter((i) => i?.continent.name === continent)
        .map((i) => i?.country);

      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(uniqueCountriesNames);
    }
  };
  useEffect(() => {
    filterCountriesByContinent(continent);
  }, [continent]);

  useEffect(() => {
    dispatch(GetLocations());
  }, [dispatch]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
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
          {/* CONTINENT */}
          <Typography variant="h3" mb={3}>
            Add Cluster
          </Typography>
          <Box mb={3} sx={{}}>
            <InputLabel id="select-continent" sx={{ mb: 2 }}>
              Continent
            </InputLabel>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Select
                id="continent"
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
                color="warning"
                sx={{ width: "100%", color: "black" }}
                variant="outlined"
              >
                <MenuItem disabled selected>
                  Select Continent
                </MenuItem>
                {uniqueContinentNames?.map(({ name, id }, index) => (
                  <MenuItem value={id} key={index}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <AddContinentModal
                showContinentModal={continentModal}
                onClose={handleCloseCountinentModal}
                onOpenContinent={openContinentModal}
              />
            </Box>
          </Box>
          <Box>
            <InputLabel id="select-continent" sx={{ mb: 2 }}>
              Country
            </InputLabel>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                color="warning"
                sx={{ width: "100%", color: "black" }}
                variant="outlined"
              >
                <MenuItem disabled>Select Countries</MenuItem>
                {filteredCountries &&
                  filteredCountries.map(({ name, id }, index) => (
                    <MenuItem value={id} key={index}>
                      {name}
                    </MenuItem>
                  ))}
              </Select>
              <AddCountryModal
                open={countryModal}
                handleClick={handleCloseCountryModal}
                setCountry={setCountry}
                continent={continent}
                setContinent={setContinent}
                onOpen={openCountryModal}
                handleClose={handleClose}
                showContinentModal={continentModal}
                onClose={handleCloseCountinentModal}
                onOpenContinent={openContinentModal}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
            <TextField
              onChange={(e) => setCluster(e.target.value)}
              variant="standard"
              label="Cluster Name"
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
              Add Cluster
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box className="location-add-btn-box">
        <Button
          onClick={openClusterModal}
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
    </>
  );
};
