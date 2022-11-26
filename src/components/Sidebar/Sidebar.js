import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import InboxIcon from '@mui/icons-material/Inbox';

const Sidebar = () => {
   return (
      <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block",backgroundColor:"#ededed"}}}>
        <Box>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
               <HomeIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Homepage" sx={{color:"purple"}} />
            </ListItemButton>
          </ListItem>
       

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
               <AccountBoxIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{color:"purple"}}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
               <ShoppingCartRoundedIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Cart" sx={{color:"purple"}}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
               <SettingsIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{color:"purple"}}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
      </Box>
   );
};

export default Sidebar;