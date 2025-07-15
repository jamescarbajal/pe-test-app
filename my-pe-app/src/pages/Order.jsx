import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-router';
import ImageGrid from '../components/ImageGrid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RadioButtons from '../components/RadioButtons';


export default function Order() {




    return (
    <>
        <Container sx={{
            width:'100vw',
            height:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            p:5
        }}>
            <Box sx={{ flexGrow:1 }}>

            </Box>
            <Paper sx={{
                minWidth:300,
                minHeight:400,
                maxHeight:'fit-content',
                p:4,
                m:0
            }}>
                <RadioButtons/>
            </Paper>
        </Container>
    </>
    )
}