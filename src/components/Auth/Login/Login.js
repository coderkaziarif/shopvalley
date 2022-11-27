import React from 'react';
import { Avatar, Button, FormControlLabel, Grid, Paper, TextField, Checkbox, Typography, Link  } from '@mui/material';
// import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';


const Login = () => {
   const paperStyle={padding:20, width:350, height:'74vh', margin:"0 auto", }

   return (
      <Grid>
         <Paper style={paperStyle}>
            <Grid align="center" sx={{marginBottom:"15px"}}>
               <Avatar sx={{backgroundColor:"purple"}}><PersonIcon/></Avatar>
               <Typography variant='h5' color='secondary'>Login </Typography> 
            </Grid>
               <TextField variant="standard" color='secondary' label="Username"  type='text' placeholder='Enter your Name'  fullWidth required></TextField>
               <TextField  variant="standard" color='secondary' label="Password"  type='password' placeholder='Enter your password' fullWidth required>
               </TextField>
               <FormControlLabel sx={{marginTop:"8px"}}
                  control={
                     <Checkbox name="checkedB" color="secondary" size="small"/>
                  }
                  label="Remember me"
               />
               <Button type="submit" color="secondary" variant='contained' fullWidth style={{margin:"8px 0"}}>Login</Button>
               <Typography>
                  <Link href="#">Forgot password ?</Link>
               </Typography>   
               <Typography>
                  Do you have an account ?
                  <Link href="#"> Sign up </Link>
               </Typography>      
         </Paper>
         
      </Grid>
   );
};

export default Login;