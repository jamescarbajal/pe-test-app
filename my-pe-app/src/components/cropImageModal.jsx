import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import CircleCrop from './CircleCrop.jsx';


const style = {
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:700,
    width:'fit-content',
    maxWidth: '99vw',
    height: 800,
    maxHeight:'70%',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 12,
    p:2
};

export default function CropImageModal(){

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
  <>
    <div>
      <Button variant='outlined' onClick={handleOpen} 
      sx={{ 
        color:'black',
        border:'2px solid black',
        '&:hover':{
          borderColor:'black'
        }
       }}>
        <CropOutlinedIcon/>
      </Button>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{
                position:'relative',
                top:0,
                left:'47%',
                aslignSelf:'right'
              }}>
              <Button onClick={handleClose} sx={{
                color:'black'
              }}>
                <CancelIcon fontSize='large'/>
              </Button>
            </Box>
            <Box sx={{
              height:'80%',
              width:'100%'
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
    </div>
  </>

    )
}