import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Card, CardBody, Col,Form, FormGroup,InputGroup ,Row,Label } from "reactstrap";

import { BsLinkedin } from 'react-icons/bs';

import { BsGithub } from 'react-icons/bs';

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextareaAutosize } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name:data.get('firstName'),
      Github:data.get('github'),
      Linkedin:data.get('linkedin'),
      username:data.get('username'),
      bio:data.get('bio'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>

             
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}

            {/* <Grid item xs={12}>
                <DesktopDatePicker
                        label="For desktop"
                        value={value}
                        minDate={new Date('2017-01-01')}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                />
            </Grid> */}
            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="mob"
                  label="Mobile Number"
                  name="number"
                  autoComplete="mob"
                />

                
              </Grid>

            <Grid item xs={12} sm={6}>
              <div className="form-group mb-4">
                      {/* <Label>DOB</Label> */}
                      <InputGroup>
                        <Flatpickr
                          
                          className="form-control d-block mt-2"
                          placeholder="DOB : dd-M-yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </InputGroup>
            </div>
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>


            
            <Grid item xs={12} sm={2} spacing={0}>
                {/* <LinkedInIcon style={{height:"100%"}}/> */}
                <BsLinkedin className='mt-1' style={{height:"50px",width:"50px", color:"#0A66C2",marginRight:"2px"}}/>
              </Grid>
            <Grid item xs={12} sm={10}>
                <TextField
                
                  fullWidth
                  id="linkedin"
                  label="Linkedin URL"
                  name="linkedin"
                  autoComplete="linkedin"
                />
              
            </Grid>

            <Grid item xs={12} sm={2} spacing={0}>
                {/* <LinkedInIcon style={{height:"100%"}}/> */}
                <BsGithub className='mt-1' style={{height:"50px",width:"50px",marginRight:"2px"}}/>
              </Grid>
            <Grid item xs={12} sm={10}>
                <TextField
                 required
                  fullWidth
                  id="github"
                  label="Github URL"
                  name="github"
                  autoComplete="github"
                />
            
          
            </Grid>
            
        
            
            <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="@Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}

              <Grid item xs={12}>
                  <TextareaAutosize
                  aria-label="empty textarea"
                //   placeholder="  Bio"
                  className='ml-2'
                  name="bio"
                  label="Bio"
                  type="text"
                  id="bio"
                  style={{ width: 400,height:100}}
                  />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}