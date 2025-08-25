import { useState, useEffect, useContext } from "react"
import { ImagesContext } from "../contexts/ImagesContext";
import Box from "@mui/material/Box";
import UserImages from "../components/UserImages";

export default function ImageUpload(){

    const { originalImages, setOriginalImages, croppedImages, setCroppedImages } = useContext(ImagesContext);

    const sessionFormData = JSON.parse(sessionStorage.getItem('orderDetails'));
    const checkSessionImages = sessionStorage.getItem('sessionImages');

    const imagesRemaining = (data) => {
        if (checkSessionImages) { 
            return (data - JSON.parse(checkSessionImages).length);
        } else return sessionFormData.Quantity;
    }

    useEffect( () => {
    }, [sessionFormData]);

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
            <p>Please select {imagesRemaining(sessionFormData.Quantity)} more images.</p>
            <br/>
            <UserImages />
        </Box>

    )
}