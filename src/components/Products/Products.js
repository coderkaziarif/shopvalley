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
         <Grid container spacing="20">
                                     
               {                  
                  offers.map((offer, index) => <Grid item xs={12} sm={4} key={index}>  <Card sx={{ maxWidth: "50vw" }}>                  
                        <CardActionArea>
                           <CardMedia sx={{objectFit:'fill',  height:'35vh', width:'100%' }}
                              component="img"                          
                              image={offer.img}
                              alt="Parrot"
                           />
                           
                        </CardActionArea>
                  </Card>
                  </Grid>
                  )
              
               }               
      
               <Grid container marginTop={10} marginLeft={1} spacing="20">
            {
               
                  products.map((product)=> <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product}/>
              
              </Grid>)
             
            }
            </Grid>
         </Grid>
      </Box>
   );
};

export default Products;