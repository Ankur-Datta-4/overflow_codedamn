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
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from "react-icons/fc";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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

          <div className='' style={{ textAlign: "center" }}>
            <Typography component="h1" variant="h1" style={{ marginBottom: "15%", marginLeft: "0.0001%" }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <div style={{
                display: "flex", flexDirection: "row", width: "120%"
              }}>
                <FcGoogle style={{ width: "20%", height: "20%", marginRight: "2%" }} />
                <Button style={{}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{}}
                >
                  Sign In With Google
                </Button>
              </div>


              {/* <div style={{
                display: "flex", flexDirection: "row", width: "120%", marginTop: "10%"
              }}>
                <FcGoogle style={{ width: "20%", height: "20%", marginRight: "2%" }} />
                <Button style={{}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{}}
                >
                  Login In With Google
                </Button>
              </div> */}



            </Box>
          </div>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider >
  );
}