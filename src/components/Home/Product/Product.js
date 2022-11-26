import React from 'react';
import {useNavigate} from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material';


const Product = ({product}) => {
   // console.log(product.name, "Product name");
   //* for navigating purposes
   const navigate = useNavigate();
   const handleCheckout = (id)=>{
      const url =`/checkout/${id}`;
      navigate(url);
   }

   return (
      <>

        
        <Card sx={{ maxWidth: 240 , marginTop:'1rem', borderRadius:'10px'}}
       >
                  <CardActionArea>
                  
                        <CardMedia
                        sx={{objectFit:'fill', borderBottomRadius:'10px', height:'150px'}}
                        component="img"
                        height="15%"
                        image={product.img}
                        alt="Parrot"                   
                        />
                  
                     <CardContent >
                        <Typography gutterBottom variant="body1" component="h4">
                              {product.name}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                           Type : {product.type}
                        </Typography>
                     </CardContent>
                     <IconButton aria-label="price" style={{color :'#9c27b0', fontWeight:600}}>
                        <AttachMoneyIcon/>{product.price}
                     </IconButton>
                     <Button onClick={() => handleCheckout(product.id)} variant="contained" size='small' style={{backgroundColor:"#9c27b0", color : '#fff', textTransform:'none'}}>
                           Buy Now
                     </Button>
                  </CardActionArea>
               </Card>         
      </>
   );
};

export default Product;