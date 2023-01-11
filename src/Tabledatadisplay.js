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
 

export default function Users() {


    const [items, setItems] = useState([]);
        

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };


        fetch("http://localhost:3333/db_data",requestOptions)
        .then(res => res.json())
        .then((result) => {
            setItems(result);
            console.log(result)
          }
        )
      }, [])


    const UserUpdate = data_id =>{
        window.location = '/Editdb_data/' + data_id
    }

 
      const UserDelete = data_id => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "data_id": data_id
            });

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3333/db_data_id", requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                if (data.status === 'Ok' ) {
                    window.location ='/user/Alldb_pricerubbers'
                    alert('ลบรายการเรียบร้อย')
                }else{
                    console.log(data.status)
                    alert('เกิดข้อผิดพลาด!!')
                }
            })
            .catch(error => console.log('error', error));
      }

      


    
      
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container maxWidth="xl" sx={{  mt: 10 , p : 5 }}>
        <Paper sx={ { p:2 }}>
            <Box align="center" display="flex">
                <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom >
                รายการขายน้ำยาง
                </Typography>
                </Box>
                    <Box>
                        <Link href="Createdatadisplay">
                            <Button variant="contained">Create</Button>
                        </Link>
                    </Box>
            </Box>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 2000 }} aria-label="simple table">
                    <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell align="center">ลำดับ</TableCell>
                            <TableCell align="lift">วันที่ทำรายการ</TableCell>
                            <TableCell align="lift">ชื่อลูกค้า</TableCell>
                            <TableCell align="lift">ประเภท</TableCell>
                            <TableCell align="lift">น้ำหนักรวมทั้งหมด</TableCell>
                            <TableCell align="lift">น้ำหนักแกลลอน</TableCell>
                            <TableCell align="lift">น้ำหนักหักลบแกลลอน</TableCell>
                            {/* <TableCell align="lift">เปอร์เซ็น</TableCell> */}
                            <TableCell align="lift">น้ำยาแห้ง</TableCell>
                            <TableCell align="lift">ราคา</TableCell>
                            <TableCell align="lift">จำนวนเงินทั้งหมด</TableCell>
                            <TableCell align="lift">เงินแบ่ง</TableCell>
                            <TableCell align="lift">เงินฝาก</TableCell>
                            <TableCell align="lift">สถานะ</TableCell>

                            <TableCell align="lift">Action</TableCell>
             
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.results?.map((results,index) => {
                        return (
                        <TableRow
                            key={results.data_id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                    <TableCell component="th" scope="row" align="center">
                                        {index + 1 }
                                    </TableCell>

                                    <TableCell align="lift" >
                                        { (new Date(results.data_date)).toLocaleTimeString('th-TH', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            weekday: 'long',
                                            }) }
                                    </TableCell>

                                    <TableCell align="lift">{ results.customer_name}</TableCell>
                                    <TableCell align="lift">{results.catwithdraw_name}</TableCell>
                                    <TableCell align="lift">{results.data_totalgallon}</TableCell>
                                    <TableCell align="lift">{results.data_wgallon}</TableCell>
                                    <TableCell align="lift">{results.data_disgallon}</TableCell>
                                    {/* <TableCell align="lift">{results.data_percent}</TableCell> */}
                                    <TableCell align="lift">{results.data_dryrubber}</TableCell>
                                    <TableCell align="lift">{results.data_price}</TableCell>
                                    <TableCell align="lift">{results.data_pricetotal}</TableCell>
                                    <TableCell align="lift">
                                      {results.data_shareprice === 0 ? <p>ยังไม่ได้ทำรายการ</p>: null}
                                      {results.data_shareprice !== 0 ? <p>{results.data_shareprice}</p>: null}
                                    </TableCell>
                                    <TableCell align="lift">
                                      {results.data_depositprice === 0 ? <p>ยังไม่ได้ทำรายการ</p>: null}
                                      {results.data_depositprice !== 0 ? <p>{results.data_depositprice}</p>: null}
                                    </TableCell>
                                    <TableCell align="lift">
                                      {results.status_id === 0 ? <p>ยังไม่ได้ทำรายการ</p>: null}
                                      {results.status_id === 1 ? <p>เบิกทั้งหมด</p>: null}
                                      {results.status_id === 2 ? <p>คูณ 45</p>: null}
                                      {results.status_id === 3 ? <p>%2</p>: null}
                                    </TableCell>

                                
                                    <TableCell align="lift">
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button onClick={ () => UserUpdate(results.data_id) } > Edit </Button>
                                            <Button onClick={ () => UserDelete(results.data_id) } > Delete </Button>
                                        </ButtonGroup>
                                    </TableCell>
                        
                        </TableRow>
)})}
                  
                    </TableBody>
                </Table>
        </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}