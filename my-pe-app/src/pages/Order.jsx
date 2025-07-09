import HeroBox from '../components/HeroBox'
import NavBar from '../components/NavBar'
import CircleCrop from '../components/CircleCrop'
import CustomModal from '../components/customModal'
import Button from '@mui/material/Button'


export default function Order() {


    return (
    <>
        <div>
            <NavBar/>
            <HeroBox/>
            <div style={{ position:'relative' }}>
                <h2 style={{ marginLeft:'50%', marginTop:50, transform:'translateX(-50%)', zIndex:1000, color:'white' }}>
                    ORDER PAGE
                </h2>
            </div>
            <Button onClick={setOpen="true"}>
                <CustomModal props={setOpen} />
            </Button>
        </div>
    </>
    )
}