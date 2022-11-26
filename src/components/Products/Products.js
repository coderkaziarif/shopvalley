import React,{ useState } from 'react';
import fakeData from "../../assets/fakeData/MOCK_DATA.json";
import { Box, Card, CardActionArea, CardMedia, Grid, ImageList, ImageListItem, Paper, Typography} from '@mui/material';
import Product from '../Home/Product/Product';
// import images1 from '../../assets/img/Red lory2.jpeg';

const Products = () => {
   const coverPhoto = fakeData.slice(1, 17);
   const [products, setProducts] = useState(coverPhoto);
   const offers = [
      {id: 1, img:'https://i.ibb.co/MSq0nRy/African-grey.jpg'},
      {id: 2, img:'https://i.ibb.co/DtVWcXJ/love-birds.jpg'},
      {id: 3, img:'https://i.ibb.co/rFtpNQz/Red-lory2.jpg'}
      ];
     

   return (  
      <Box backgroundColor="lightgrey" flex={6} p={2}>
         <Grid container spacing="5">
                                     
               {                  
                  offers.map((offer, index) => <Grid item xs={6} sm={4} key={index}>  <Card sx={{ maxWidth: 345 }}>                  
                        <CardActionArea>
                           <CardMedia sx={{objectFit:'fill',  height:'150px', }}
                              component="img"                          
                              image={offer.img}
                              alt="Parrot"
                           />
                           
                        </CardActionArea>
                  </Card>
                  </Grid>
                  )
              
               }               
      
           
            {
               products.map((product)=> <Grid key={product.id} item xs={6} sm={4} md={3} >
               <Product product={product}/>
              </Grid>)
            }

         </Grid>
      </Box>
   );
};

export default Products;