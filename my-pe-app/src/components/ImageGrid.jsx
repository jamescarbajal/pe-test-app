import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import UploadImageCard from './UploadImageCard';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    height:275,
    width:250,
    maxWidth:'fit-content',
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

        <Box sx={{ 
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:'fit-content',
                m: 5
            }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
                width:'fit-content',
                borderRadius:10
             }}>
            {Array.from(Array(9)).map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4, md: 4 }}
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    height:'fit-content',
                }}>
                <Item>
                    <UploadImageCard/>
                </Item>
            </Grid>
            ))}
            </Grid>
        </Box>

    )
}