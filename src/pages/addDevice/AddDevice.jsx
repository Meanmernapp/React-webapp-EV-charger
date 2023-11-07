import { Button, Stack, Typography } from "@mui/material";
import "./AddDevice.scss";
import Configuration from "./components/Configuration";
import Device from "./components/Device";
import Location from "./components/Location";
import { useEffect, useState } from "react";
import arrowRight from "../../assets/Icons/arrowRight.svg";
import ConfirmationModal from "../../components/ConfirmationModal";
import "./components/CancelAddBtn.scss";
import { useDispatch } from "react-redux";
import { CreateDevice } from "../../services/addDevice/AddDeviceApi";
import DeviceList from "../deviceList/DeviceList";

export const AddDevice = () => {
  const dispatch = useDispatch();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showDeviceModal, setShowDeviceModal] = useState(false);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };
  const [addDevice, setAddDevice] = useState({});
  const updateCombinedState = (childState) => {
    setAddDevice((prevState) => ({
      ...prevState,
      ...childState,
    }));
  };
  const handleAddDevice = () => {
    try {
      delete addDevice.code;
      delete addDevice.type;
      addDevice.device_lat = parseFloat(addDevice.device_lat);
      addDevice.device_lng = parseFloat(addDevice.device_lng);
      addDevice.config_imei = addDevice.config_imei.toString();
      addDevice.config_modbus = addDevice.config_modbus.toString();
      addDevice.capacity = parseInt(addDevice.capacity);
      addDevice.device_type = selectedOption;
      dispatch(
        CreateDevice({
          ...{ addDevice },
        })
      );
    } catch (error) {
      console.error("Error creating cluster:", error);
    }

    setOpenConfirmDelete(false);
  };
  useEffect(() => {
    setAddDevice((prevState) => ({
      ...prevState,
      ...{ type: selectedOption },
    }));
  }, [selectedOption]);
  const closeDeviceModal = () => {
    setShowDeviceModal(false);
  };

  return (
    <Stack padding={"2rem"} sx={{ backgroundColor: "white" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mb={3}
        width={"100%"}
      >
        <Typography variant="h3">Add New Device to list</Typography>
        <Button
          sx={{
            border: "none",
            background: "transparent",
            color: "#9c9c9c",
            textTransform: "none",
          }}
          onClick={() => setShowDeviceModal(true)}
        >
          <img src={arrowRight} alt="arrow Right" />
          See List
        </Button>
      </Stack>
      <DeviceList
        showDeviceModal={showDeviceModal}
        onClose={closeDeviceModal}
      />
      <Location onUpdateState={updateCombinedState} />
      <Device
        onSelectChange={handleSelectChange}
        onUpdateState={updateCombinedState}
        selectedOption={selectedOption}
      />
      <Configuration
        selectedOption={selectedOption}
        onUpdateState={updateCombinedState}
      />
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
          onConfirm={handleAddDevice}
          open={openConfirmDelete}
          colorCode="green"
          confirm="confirm"
        />
      </Stack>
    </Stack>
  );
};
// export default AddDevice;
