import { useState, useEffect } from "react"
import ImageGrid from "../components/ImageGrid"
import Box from "@mui/material/Box"

export default function ImageUpload(){

    return(
        
                <Box sx={{
            position:'relative',
            width:'100vW%',
            height:'91vh',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'start',
            p:2
            }}>
                <ImageGrid/>
            </Box>

    )
}