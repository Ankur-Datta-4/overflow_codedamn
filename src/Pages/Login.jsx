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
import {auth,provider} from '../Firebase'
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserLoginDetails } from '../Features/User/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const SERVERURL="http://localhost:1337/api"

const theme = createTheme();

export default function Login() {

  const dispatch=useDispatch()
  let navigate=useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result.user)      
      let {displayName:name, email, photoURL}=result.user;
      let obj2={name,email,photoURL};


      axios.post(`${SERVERURL}/user`,obj2)
      .then((res)=>{
        console.log(res.data)
        if(res.data && res.data.success){
          obj2={...obj2,slug:res.data.slug}
          

          console.log(obj2)
          dispatch(setUserLoginDetails(obj2));
          //existing user
          if(res.data.isPresent){
            // ToastShow('Login','Login Successfull','success')
            // toast.success("Login Successful")
            navigate('/login/success')
          }else{
            // toast.error("Login failed")
            navigate('/register')
          }

        }
      }).catch((err)=>{
        console.log(`Error in axios backend`)
        console.log(err)
        //create some alert bar bro
      })
      

      //dispatch(obj2)
    })
    .catch((err)=>{
      console.log(`Err during SigninWithPopUp`)
      console.error(err)
    })
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