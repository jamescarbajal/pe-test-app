import Box from '@mui/material/Box';
import UploadImageCard from './ImageCard';
import Grid from '@mui/material/Grid';
import CropImageModal from './cropImageModal';


export default function ImageGrid(){

    const orderData = sessionStorage.getItem('orderOptions');
    const parsedData = JSON.parse(orderData);
    const imageCount = parsedData.Quantity;


        return (
    <>
        <Box sx={{ 
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:'90vw',
                height:'fit-content',
                backgroundColor:'black'
            }}>
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-evenly',
                alignItems:'space-evenly',
                width:'100%',
                height:'fit-content'
             }}>
            {Array.from(Array(imageCount)).map((_, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    height:'fit-content'
                }}>

                    <h4 style={{
                        marginTop:0,
                        marginBottom:0,
                        color:'black'
                    }}>Image {index + 1}
                    </h4>
                    <CropImageModal imageIndex={index}/>
            </Grid>
            ))}
            </Grid>
        </Box>
    </>
    )
}