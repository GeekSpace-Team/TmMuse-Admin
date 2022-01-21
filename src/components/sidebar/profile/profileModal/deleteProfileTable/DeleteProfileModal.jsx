import React, { useState } from 'react'
import './DeleteProfileModal.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { IconName, IoMdClose } from "react-icons/io";
import Stack from '@mui/material/Stack';


const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    borderRadius: '8px',
    bgcolor: 'background.paper',
    border: 'transparent',
    boxShadow: 24,
    p: 4,
  };
  

const DeleteProfileModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <img onClick={handleOpen} src="images/Delete.svg" alt="" />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="Close">
                <p>Do you want delete?</p>
                <IoMdClose onClick={handleClose} className='close'/>
            </div>
                <div className="deleteButton">
                    <button onClick={handleClose} id='noButton'>No</button>
                    <button id='yesButton'>YES</button>
                </div>
          </Box>
        </Fade>
      </Modal>
        </div>
    )
}

export default DeleteProfileModal
