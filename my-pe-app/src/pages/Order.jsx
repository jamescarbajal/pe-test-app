import { useState } from 'react'
import { Link } from 'react-router';
import HeroBox from '../components/HeroBox'
import NavBar from '../components/NavBar'
import CircleCrop from '../components/CircleCrop'
import Button from '@mui/material/Button'
import CustomModal from '../components/customModal';


export default function Order() {

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
        <NavBar/>
        <HeroBox/>
        <div>
            <div style={{ position:'relative' }}>
                <h2 style={{ marginLeft:'50%', marginTop:50, transform:'translateX(-50%)', zIndex:1000, color:'white' }}>
                    ORDER PAGE
                </h2>
            </div>
        </div>
        <div className='overlay'>
            <CustomModal/>
        </div>
    </>
    )
}