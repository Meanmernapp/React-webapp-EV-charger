import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
const ConfirmationModal = ({ open, onClose, onConfirm, confirmationMessage, confirm, colorCode }) => {
  return (
    <Dialog open={open} onClose={onClose}   >
      {/* IconButton with CloseIcon for closing the modal */}
      {/* <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: '8px',
          top: '0px',
        }}
      >
        <CloseIcon />
      </IconButton> */}
      <DialogTitle sx={{ padding: "12px 24px", color: colorCode }} textAlign="center" >
        <Typography variant='h3' component="h3" >
          Are you sure?
        </Typography>

      </DialogTitle>
      <DialogContent sx={{ padding: "12px 24px", textAlign:"center" }}>
        <DialogContentText >{confirmationMessage}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        gap: "1rem",
        paddingBottom: "1rem"

      }}>
        <Button variant='outlined' color='primary' onClick={onClose}
          sx={{
            border: `1px solid ${colorCode}`,
            color: colorCode,
            borderRadius: "105px",
            "&:hover": {
              border: `1px solid ${colorCode}`,
            }
          }}>
          Cancel
        </Button>
        <Button onClick={onConfirm} sx={{
          background: colorCode,
          borderRadius: "105px",
          padding: "0.5rem 1rem  ",
          "&:hover": {
            background: colorCode
          }


        }}
          autoFocus>
          {confirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmationMessage: PropTypes.string.isRequired,
};

export default ConfirmationModal;
