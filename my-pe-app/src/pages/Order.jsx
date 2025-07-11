import { useState } from 'react'
import { Link } from 'react-router';
import HeroBox from '../components/HeroBox'
import NavBar from '../components/NavBar'
import CircleCrop from '../components/CircleCrop'
import Button from '@mui/material/Button'
import CustomModal from '../components/cropImageModal';


export default function Order() {

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
        <HeroBox/>
        <NavBar/>
        <h2 style={{ marginTop:50, color:'white' }}>
            ORDER PAGE
        </h2>
        <div className='overlay'>
            <CustomModal/>
        </div>
    </>
    )
}