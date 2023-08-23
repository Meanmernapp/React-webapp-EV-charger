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
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material'; 
const ConfirmationModal = ({ open, onClose, onConfirm, confirmationMessage }) => {
  return (
    <Dialog open={open} onClose={onClose} >
          {/* IconButton with CloseIcon for closing the modal */}
      <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: '8px',
          top: '0px',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{padding: "12px 24px"}} textAlign="center" >Confirmation</DialogTitle>
      <DialogContent sx={{padding: "12px 24px"}}>
        <DialogContentText>{confirmationMessage}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        gap:"1rem",
        paddingBottom:"1rem"
        
      }}>
        <Button size='small' onClick={onClose} color="primary" >
          Cancel
        </Button>
        <Button size='small' onClick={onConfirm} color="primary"sx={{
            background:'#74993F',
            "&:hover":{
                background:"#BADA55"
            }
        }}
         autoFocus>
          Confirm
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
