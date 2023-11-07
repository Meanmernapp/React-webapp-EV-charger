import {
  Box,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDevice } from "../../services/addDevice/AddDeviceApi";

const DeviceList = ({ showDeviceModal, onClose }) => {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.AddDevice.deviceData[0]);
  useEffect(() => {
    dispatch(GetDevice());
  }, [dispatch]);
  return (
    <Box>
      <Modal
        open={showDeviceModal}
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
            overflowY: "scroll",
            maxHeight: "400px",
          }}
        >
          <Box>
            <Typography variant="h3" mb={3}>
              Devices
            </Typography>

            <Box mb={3}>
              <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
                <ol>
                  {devices
                    ?.filter((i) => i?.name !== "")
                    ?.map(({ name }, index) => (
                      <li key={index} style={{ marginBottom: "10px" }}>
                        {name}
                      </li>
                    ))}
                </ol>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default DeviceList;
