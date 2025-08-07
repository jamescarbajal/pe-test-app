import { useState, useEffect } from "react"
import ImageGrid from "../components/ImageGrid"
import Box from "@mui/material/Box"
import UserImages from "../components/UserImages"
import CropImages from "../components/CropImages";

export default function ImageUpload(){

    const sessionFormData = JSON.parse(sessionStorage.getItem('orderOptions'));
    const imageCount = sessionFormData.Quantity;

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
            <p>Please select {imageCount} images.</p>
            <br/>
            <UserImages />
        </Box>

    )
}