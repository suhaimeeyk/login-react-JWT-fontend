import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCardIcon from '@mui/icons-material/AddCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
        <ListItemIcon>
                <DashboardIcon />
        </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
    <ListItemButton>
            <ListItemIcon>
                    <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="ข้อมูลการขายยางพารา" />
    </ListItemButton>
    <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
                <ListItemText primary="ค่าปุ๋ย" />
    </ListItemButton>
    <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
                <ListItemText primary="เบิกล่วงหน้า" />
    </ListItemButton>
    <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
                 <ListItemText primary="ข้อมูลรายรับรายจ่าย" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" align="lift"  inset>
    รายการส่วนตัว
    </ListSubheader>
    <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="รายการลูกค้า" />
    </ListItemButton>
    <ListItemButton>
        <ListItemIcon>
            <ManageAccountsIcon />
        </ListItemIcon>
        <ListItemText primary="ประเภทลูกค้า" />
    </ListItemButton>
    <ListItemButton>
        <ListItemIcon>
            <AddCardIcon />
        </ListItemIcon>
        <ListItemText primary="ประเภทการเบิกเงิน" />
    </ListItemButton>
    <ListItemButton>
        <ListItemIcon>
            <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="ราคาน้ำยางรายวัน" />
    </ListItemButton>
  </React.Fragment>
);
