import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from './Slider/Slider';
// import fakeData from "../../assets/fakeData/MOCK_DATA.json";
import { Box, Grid, Stack } from '@mui/material';
// import Product from './Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

const Home = () => {
   // const coverPhoto = fakeData.slice(1, 17);
   // const [products, setProducts] = useState(coverPhoto);
   
   return (
      <Box>
         <Navbar/>
         <Slider/>
         <Stack direction ="row" spacing={0} >
            <Sidebar/>
            <Products/>
         </Stack>
         <Footer/>
      </Box>
   );
};

export default Home;