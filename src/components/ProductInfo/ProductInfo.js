import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, Rating, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';

const ProductInfo = () => {
   const {id} = useParams();
   //* Rating icon 
   const [value, setValue] = useState(3);

   // todo Counting item
   const [increase, setIncrease] = useState("");
   const [decrease, setDecrease] = useState("");
   console.log(increase,"clicked to plus btn");
   console.log(decrease,"clicked to minus btn");

   //* custom style button 
   const StyledButton = styled(Button)({
      width : "30%",
      padding: "10px",
      backgroundColor: "black",
      color:"white",
      fontWeight: "600",
      '&:hover':{
         backgroundColor:"red"
      }
   });

   const CountBox = styled(Box)({
      // display:"flex",
      // justifyContent:"center",
      // alignItems:"center",
      width : '30%',

   })

   const WrapperBox = styled(Box)({
      height : "10vh",
      Width:"30%",
      marginRight:"20px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      // backgroundColor : "#ededed",
      border:"1px solid #ededed"
   })


   return (
      <>
         <h2>Product info {id}....</h2>
         <Container>
            <Grid container>
               <Grid item lg={7} sm={5}>
                     <Typography>Product mages area</Typography>
               </Grid>
               <Grid item lg={5} sm={7} >
                     <Typography variant='h4'> Wool Bolero Hat </Typography>  
                     <Box>
                        <Rating value={value} 
                           onChange={(e, newValue) => {
                           setValue(newValue)
                        }}/>
                     </Box> 
                     <Typography variant='h5' mt={2}>$ 95.00</Typography>
                     <Typography variant='body2' marginTop={5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vitae reprehenderit eveniet nam ducimus obcaecati laboriosam totam vel non fugit. The cotton blend t-shirt comes in a regular fit.Record smoother, clearer videos. Local Heroes Transparent Heart Sweat</Typography> 
                     <IconButton>
                           <DoneIcon color="secondary"/>
                           <Typography variant='subtitle2' color="secondary" sx={{padding:"2px"}}>in stock</Typography>
                     </IconButton> 
                     <Box sx={{display:'flex'}}>
                        <CountBox>
                           <WrapperBox>
                              <span className ='minus' onClick={(e, value)=> setDecrease(value)}> <RemoveIcon/></span> 
                              <span className='num'>1</span> 
                              <span className='plus' onClick={(e, value)=> setIncrease(value)}><AddIcon/></span> 
                           </WrapperBox>
                        </CountBox>
                        <StyledButton type="button">Add To Cart</StyledButton>
                     </Box>             
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default ProductInfo;