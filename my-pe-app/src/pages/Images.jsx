import Box from "@mui/material/Box";
import UserImages from "../components/UserImages";

export default function ImageUpload(){

    return(
        
        <Box sx={{
            position:'relative',
            width:'100vw',
            minHeight:'91vh',
            height:'fit-content',
            display:'flex',
            flexDirection:'column',
            flexWrap:'wrap',
            justifyContent:'start',
            alignItems:'center',
            p:2
        }}>
            <UserImages />
        </Box>

    )
}