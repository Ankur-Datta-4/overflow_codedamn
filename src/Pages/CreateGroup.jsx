import * as React from 'react';

import{ useState, useEffect } from "react"
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
import GroupsIcon from '@mui/icons-material/Groups';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/material';
import { BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { RiInstagramFill } from 'react-icons/ri';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SiDiscord } from 'react-icons/si';

import {    Badge} from "reactstrap"

import 'react-tagsinput/react-tagsinput.css'
import TagsInput from 'react-tagsinput'

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

export default function GroupCreate() {

    const[tags,setTags]=useState(['react'])
    function handleChange(tags){
        setTags(tags)
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      group_name: data.get('groupName'),
      bio:data.get('bio'),
      tags:tags
    });
  };

  console.log(tags)
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
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <GroupsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Group
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="groupName"
                  required
                  fullWidth
                  id="groupName"
                  label="Group Name"
                  autoFocus
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                //   placeholder={} || 'abc@gmail.com'
                  autoComplete="email"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="  Tell something about your group"
                  className='ml-2'
                  required
                  name="bio"
                  label="Bio"
                  type="text"
                  id="bio"
                  style={{ width: 400,borderColor:"black",height:100}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TagsInput  style={{color:"blue",background:"blue"}} value={tags} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="url"
                  label="Group profile pic URL"
                  name="url"
                //   placeholder={} || 'abc@gmail.com'
                //   autoComplete="email"
                />
              </Grid>

              
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            
            {/* <Grid item xs={12} sm={7} spacing={0}>
            </Grid> */}
            <Grid item xs={6} sm={12}>
            <BsLinkedin className='mt-3' style={{height:"3rem",width:"2rem", color:"#0A66C2",marginRight:"2px",marginLeft:"10px"}}/>
                <TextField
                
                  fullWidth
                  id="linkedin"
                  className='mt-2'
                  style={{width:"22rem"}}
                  label="Linkedin URL"
                  name="linkedin"
                  autoComplete="linkedin"
                />
              
            </Grid>


            <Grid item xs={6} sm={12}>
            <GrTwitter  className='mt-3' style={{height:"3rem",width:"2rem", color:"#00acee",marginRight:"2px",marginLeft:"10px"}}/>
                <TextField
                
                  fullWidth
                  id="twitter"
                  className='mt-2'
                  style={{width:"22rem"}}
                  label="Twitter URL"
                  name="twitter"
                  autoComplete="twitter"
                />
              
            </Grid>

            <Grid item xs={6} sm={12}>
            <RiInstagramFill  className='mt-3' style={{height:"3rem",width:"2rem", color:"#E1306C",marginRight:"2px",marginLeft:"10px"}}/>
                <TextField
                
                  fullWidth
                  id="instagram"
                  className='mt-2'
                  style={{width:"22rem"}}
                  label="Instagram URL"
                  name="instagram"
                  autoComplete="instagram"
                />
              
            </Grid>

            <Grid item xs={6} sm={12}>
            <WhatsAppIcon  className='mt-3' style={{height:"3rem",width:"2rem", color:"#075e54",marginRight:"2px",marginLeft:"10px"}}/>
                <TextField
                
                  fullWidth
                  id="whatsapp"
                  className='mt-2'
                  style={{width:"22rem"}}
                  label="Whatsapp group link"
                  name="whatsapp"
                  autoComplete="whatsapp"
                />
              
            </Grid>

            <Grid item xs={6} sm={12}>
            <SiDiscord  className='mt-3' style={{height:"3rem",width:"2rem", color:"#00acee",marginRight:"2px",marginLeft:"10px"}}/>
                <TextField
                
                  fullWidth
                  id="discord"
                  className='mt-2'
                  style={{width:"22rem"}}
                  label="Discord server link"
                  name="discord"
                  autoComplete="discord"
                />
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Group
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}