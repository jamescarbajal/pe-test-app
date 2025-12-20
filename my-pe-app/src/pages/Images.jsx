import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import UserImages from "../components/UserImages";

export default function ImageUpload(){

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
        if (hasUnsavedChanges) {
            event.preventDefault();
            event.returnValue = ''; // Standard for most browsers
            return 'Refreshing/navigating away will cause you to lose '; // For some older browsers
        }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

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