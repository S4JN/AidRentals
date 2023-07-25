import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, RadioGroup, Radio, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from '../assets/ImageLogin.jpg'
import styled from '@emotion/styled';
import homePage from '../assests/wp2968489.webp'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const role = data.get('role');
    const address = data.get("address");
    const city = data.get("city");
    const state= data.get("state");
    const zip = data.get("zipCode");

    if (!role || !email || !password) {
      console.log("enter all fields");
      console.log(role, email, password);


    } else {

      console.log({
        email: data.get('email'),
        password: data.get('password'),
        role: data.get("role"),
        address: data.get("address"),
        city: city,
        state: state,
        zip: zip
        
        // selectedRole
      });
    }
  };

  const [selectedRole, setSelectedRole] = useState('customer');


  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const defaultTheme = createTheme();

  return (
    <>

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${homePage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            {/* <LockOutlined /> */}
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
              <Dabba>

                <RadioGroup aria-label="role" name="role" value={selectedRole} onChange={handleRoleChange}>
                  <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
                  {/* <FormControlLabel value="admin" control={<Radio />} label="Admin" /> */}
                  <FormControlLabel value="Organisation" control={<Radio />} label="Organisation" />
                  <FormControlLabel value="Compunder" control={<Radio />} label="Compunder" />
                </RadioGroup>
              </Dabba>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter Your Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <PasswordCont>
                <TextField
                  margin="normal"
                  required
                  fullWidth

                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth

                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

              </PasswordCont>

              <TextField
                margin="normal"
                required
                fullWidth
                name="contact"
                label="Contact Number"
                type="tel"
                id="contact"
              />
              <TextField
                margin="normal"
                required
                fullWidth

                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />

              <PasswordCont>

                <Cont
                  margin="normal"
                  required
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  autoFocus
                />
                <Cont
                  margin="normal"
                  required
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  autoFocus
                />
                <Cont
                  margin="normal"
                  required
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  autoComplete="zipCode"
                  autoFocus
                />

              </PasswordCont>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <RegisterTo variant="body2" >
                    Already have an account? <Link href='/login'>Sign In</Link>
                  </RegisterTo>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="/AboutUs">
                  AidRentals
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>


    </>
  );
};

export default Register;


const RegisterTo = styled(Typography)`
  color: blue;
  cursor: pointer;
`
const Dabba = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5%;

  & .MuiFormControlLabel-root {
    margin-right: 10px; /* Adjust the spacing between radio buttons */
  }

  & .MuiSvgIcon-root {
    font-size: 16px; /* Decrease the size of radio buttons */
  }
  
  & .MuiFormGroup-root {
    flex-direction: row;
  }
`;

const PasswordCont = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
`

const Cont = styled(TextField)`
  
  width: 30%;


`