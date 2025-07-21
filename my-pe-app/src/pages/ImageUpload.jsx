import { useState, useEffect } from "react"
import UploadImageCard from "../components/UploadImageCard"
import Box from "@mui/material/Box"

export default function ImageUpload(){

    return(
        
                <Box sx={{
            position:'relative',
            width:'100%',
            maxWidth:'100vw',
            height:'91vh',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'start',
            }}>
                <UploadImageCard/>
            </Box>

    )
}