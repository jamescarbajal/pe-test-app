import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import UploadImageCard from './UploadImageCard';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    height:275,
    width:225,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  }),
}));


export default function ImageGrid(){

        return (
    <>
        <Box sx={{ 
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:'fit-content',
                height:'fit-content',
            }}>
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                width:'fit-content',
                height:'fit-content'
             }}>
            {Array.from(Array(5)).map((_, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    height:'fit-content',
                    m:0
                }}>

                    <h4 style={{
                        marginTop:0,
                        marginBottom:0,
                        color:'black'
                    }}>Image {index + 1}
                    </h4>
                    <UploadImageCard/>

            </Grid>
            ))}
            </Grid>
        </Box>
    </>
    )
}