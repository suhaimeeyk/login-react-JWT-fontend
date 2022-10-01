import React,{ useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
// import Axios from 'axios';

export default function Users() {

    const [items, setItems] = useState([]);
        

      useEffect(() => {
        fetch("http://localhost:3333/Users")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            //   console.log(result)
            }
          )
      }, [])

      console.log(items.results)
      

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p : 5 }}>
        <Paper sx={ { p:2 }}>
            <Box display="flex">
                <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Users
                </Typography>
                </Box>
                    <Box>
                        <Link href="CreateUsers">
                            <Button variant="contained">Create</Button>
                        </Link>
                    </Box>
            </Box>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ลำดับ</TableCell>
                        <TableCell align="center">ชื่อ</TableCell>
                        <TableCell align="center">เบอร์</TableCell>
                        <TableCell align="center">Action</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.results?.map((results) => (
                        <TableRow
                            key={results.users_id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                    <TableCell component="th" scope="row">
                                        {results.users_id}
                                    </TableCell>
                                    <TableCell align="center">{results.users_name}</TableCell>
                                    <TableCell align="center">{results.users_tel}</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button>Edit</Button>
                                            <Button>Delete</Button>
                                        </ButtonGroup>
                                    </TableCell>
                        
                        </TableRow>
                    ))}
                    {/* <ul>
          {items.map(results => (
            <li key={results.users_id}>{results.users_name}</li>
          ))}
        </ul> */}
                    </TableBody>
                </Table>
        </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
