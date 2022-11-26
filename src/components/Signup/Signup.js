import React from 'react';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



const Signup = () => {
   const paperStyle ={padding: "30px 20px",margin:"20px auto", width:350} 
   return (
      <>
      <Grid>
         <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
               <Avatar sx={{backgroundColor:"purple"}}><AddCircleOutlineIcon/></Avatar>
               <Typography variant='h5' color='secondary'>Signup </Typography> 
               <Typography variant='caption'>
                  Please fill this form to create an account !</Typography> 
            </Grid>
            <form style={{marginTop:"15px"}}>

               <TextField variant ="standard" type="text" name="name" label='Name' placeholder="Enter your name" fullWidth required color='secondary'> </TextField>

               <TextField variant ="standard" type="text" name="email" label='Email' placeholder="Enter your email" fullWidth required color='secondary'></TextField>

               <TextField variant ="standard" type="" name="phn" label='Phone number' placeholder="Phone number" fullWidth required color='secondary'></TextField>

               <TextField variant ="standard" type="password" name="password" label='Password' placeholder="Enter your password" fullWidth required color='secondary'></TextField>

               <TextField variant ="standard" type="password" name="cPassword"  label='Confirm password' placeholder="Confirm password" fullWidth required color='secondary'></TextField>

               <FormControlLabel sx={{marginTop:"5px"}} control={<Checkbox name="checkedA" color="secondary" size="small"/>}
               label="I accept the terms and condition."/>

               <Button type='submit' variant='contained' color='secondary' fullWidth style={{margin:"8px 0"}}>Sign up</Button>
            </form>            
         </Paper>
      </Grid>
       
      </>
   );
};

export default Signup;