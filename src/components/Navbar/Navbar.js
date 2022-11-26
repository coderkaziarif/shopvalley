import React from 'react';
import { styled } from '@mui/material/styles';
import {AppBar,Button,InputBase,Toolbar, Typography} from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box } from '@mui/system';
// import shopIcon from "../../assets/icon/shopping-cart 1.png";

//* custom style toolbar 
const StyledToolbar = styled(Toolbar)({
   display :"flex",
   justifyContent:"space-between",
   alignItems:'center'
});

//* custom style searchbar
const Search = styled("div")(({theme}) =>({
   position:"relative",
   backgroundColor:'white',
   padding:"0 10px",
   // width:"30%",
   borderRadius:theme.shape.borderRadius,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 }));

 const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'primary',
   '& .MuiInputBase-input': {
     padding: theme.spacing(1, 1, 1, 0),
     // vertical padding + font size from searchIcon
     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       width: '50ch',
       '&:focus': {
         width: '30ch',
       },
     },
   },
 }));

const Navbar = () => {
   

   return (
      <>
         <AppBar position="static" color="secondary">
            <StyledToolbar>
                  <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>ShopValley</Typography>
                  <MenuRoundedIcon sx={{display:{xs:"block", sm:"none"}}} />
                  <Search>
                     <SearchIconWrapper>
                        <SearchRoundedIcon sx={{color:"grey"}} />
                     </SearchIconWrapper>
                    <StyledInputBase placeholder='Search...'/>
                     </Search>
                  <Box>
                     <ShoppingCartRoundedIcon/>
                     <Button  variant="outlined" color='inherit' sx={{marginLeft:'15px'}}><Typography >Login</Typography></Button>
                  </Box>
                  
            </StyledToolbar>
         </AppBar>
      </>
   );
};

export default Navbar;