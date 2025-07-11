import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleCrop from './CircleCrop.jsx';


const style = {
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-evenly',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:700,
    width:'fit-content',
    maxWidth: '99vw',
    height: 800,
    maxHeight:'70%',
    border: '2px solid #000',
    borderRadius: 10,
    boxShadow: 12,
    p: 4,
};

export default function CustomModal(){

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
  <>
      <div style={{ zIndex:1000 }}>
      <Button onClick={handleOpen}>
        Press Me
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{
              position:'relative',
              height:'80%',
              width:'100%',
            }}>
              <CircleCrop/>
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Button>
    </div>
  </>

    )
}