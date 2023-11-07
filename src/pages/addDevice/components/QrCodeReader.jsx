import {  CloseRounded } from "@mui/icons-material";
import { Box, Button, Modal, Stack } from "@mui/material";
import { QrReader } from "react-qr-reader";

export const QRCodeReader = ({ open, onClose, setConf }) => {
  let count = 0;
  const handleScan = (result) => {
    if (result?.text) {
      if (count === 0) {
        count++;
        setConf(JSON.parse(atob(result?.text))?.deviceConfig);
        onClose();
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <Button onClick={() => onClose()}>
            <CloseRounded />
          </Button>
        </Box>
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
          }}
        >
          <QrReader
            scanDelay={50}
            onResult={handleScan}
            constraints={{ facingMode: "environment" }}
          />
        </Stack>
      </Box>
    </Modal>
  );
};
