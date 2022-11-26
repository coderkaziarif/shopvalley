import React from 'react';
import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image from '../../assets/icon/pic1 .png';

const Footer = () => {
   return (
      <>
         <Grid container sx={{ pb:5,backgroundColor:"#ededed",}} >
            <Grid item xs= {4} sx={{backgroundColor:"#ededed"}} >
               <img src={image} alt="pic"style={{Width:"100% ", height:'50vh',objectFit:"fill"}}  />
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{mt:5,}}> o </Divider>
            <Grid item xs={7}  color='secondary' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"10px", }}>
               <Box>
                  <Typography variant='h4' color="secondary">ShopValley</Typography>
                  <Typography variant='body1' component='p' color="secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, soluta.</Typography>
                  <Typography variant='h5' color="secondary"> Call us
                  <IconButton>
                  <AddIcCallIcon color="secondary" sx={{marginRight:'10px'}}/>
                  <p style={{color:"purple", }}> 897 152 2054</p>
                  </IconButton>
                  </Typography>
               </Box>
               <Box mt="-20px">
                  <Typography variant='h5' color="secondary">Follow us on </Typography>
                  <IconButton component="a" href="#">
                     <FacebookIcon fontSize='large' color="secondary"/>
                  </IconButton>
                  <IconButton component="a" href="#" >
                     <YouTubeIcon fontSize='large' color="secondary"/>
                  </IconButton>
                  <IconButton component="a" href="#">
                     <LinkedInIcon fontSize='large' color="secondary"/>
                  </IconButton>
               </Box>
               <Box>
                  
                
               </Box>
            </Grid>

         </Grid>
         
      </>
   );
};

export default Footer;