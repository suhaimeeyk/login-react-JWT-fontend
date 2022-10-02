import React,{ useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "./img/LOGO.png";
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';


const theme = createTheme();

export default function EditUser() {

    const { users_id } = useParams();

    const [users_name,setUsers_name] = useState('');
    const [users_tel,setUsers_tel] = useState('');
    const [users_usersname,setUsers_usersname] = useState('');
    useEffect( () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3333/EditUser/"+users_id, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result['status'] === 'Ok') {
                    
                    setUsers_name(result['data']['users_name'])
                    setUsers_tel(result['data']['users_tel'])
                    setUsers_usersname(result['data']['users_usersname'])

                }
            })
            .catch(error => console.log('error', error));
    }, [users_id])


  const handleSubmit = (event) => {
    event.preventDefault();

    var data = new FormData(event.currentTarget);
    
    var  jsonData = {
      users_id: users_id,
      users_usersname: data.get('users_usersname'),
      users_password: data.get('users_password'),
      users_name : data.get('users_name'),
      users_tel : data.get('users_tel'),
    }

    
    fetch('http://localhost:3333/EditUser', {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(jsonData)
        if(data.status === 'Ok' ) {
            window.location ='/Album'
            alert('register success')
        }else{
            alert('register failed')
        }

        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };


  return (

    <ThemeProvider theme={theme}>
    <Navbar/>
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
             <Box
            component="img"
            sx={{
            height: 150,
            }}
            alt="Your logo."
            src={Logo}
        />
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Users
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="users_name"
                  required
                  fullWidth
                  id="users_name"
                  label="Name"
                  onChange={ (e) => setUsers_name(e.target.value)}
                  value={users_name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="users_tel"
                  label="Tell"
                  name="users_tel"
                  autoComplete="family-name"
                  onChange={ (e) => setUsers_tel(e.target.value)}
                  value={users_tel}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="users_usersname"
                  label="Email Address"
                  name="users_usersname"
                  autoComplete="email"
                  onChange={ (e) => setUsers_usersname(e.target.value)}
                  value={users_usersname}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="users_password"
                  label="กรุณาใส่รหัสผ่านใหม่"
                  type="password"
                  id="users_password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="ยอมรับการสร้างบัญชี."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ยืนยันการแก้ไข
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Album" variant="body2">
                  BACK
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}