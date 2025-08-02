import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CircleCrop from './CircleCrop.jsx';
import UploadImageCard from './ImageCard.jsx';
import UserImages from './UserImages.jsx';



const style = {
    zIndex:1000,
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'fit-content',
    maxWidth:'90%',
    height:550,
    maxHeight:'70%',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 12,
    p:2,
    backgroundColor:'#E49999'
};

export default function CropImageModal(){

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
  <>
    <div>
      <Button onClick={handleOpen} 
      sx={{
        width:200
       }}>
        <UploadImageCard/>
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
                m:0,
                p:0
              }}>
              <Button onClick={handleClose} sx={{
                color:'black'
              }}>
                <CancelIcon fontSize='large'/>
              </Button>
            </Box>
            <Box sx={{
              minHeight: 400,
              maxHeight:'80%',
              width:'100%',
              }}>
              <CircleCrop/>
            </Box>
            <Box sx={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              width:'100%'
            }}>
              <UserImages/>
            </Box>
          </Box>
        </Modal>
    </div>
  </>

    )
}