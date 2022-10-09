import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Login'
import Album from './Album'
import Register from './Register'
import CreateUsers from './CreateUsers'
import EditUser from './EditUser'
import Navbar from './Navbar'
import Alldb_catusers from './Alldb_catusers'
import EditUserdb_catusers from './EditUserdb_catusers'
import Createdb_catusers from './Createdb_catusers'
import Alldb_catwithdraw from './Alldb_catwithdraw'
import Createdb_catwithdraw from './Createdb_catwithdraw'
import Editdb_catwithdraw from './Editdb_catwithdraw'
import Alldb_pricerubbers from './Alldb_pricerubbers'
import EditUserdb_pricerubbers from './EditUserdb_pricerubbers'
import Createdb_pricerubbers from './Createdb_pricerubbers'
import Alldb_customer from './Alldb_customer'
import Createdb_customer from './Createdb_customer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/album" element={<Album />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CreateUsers" element={<CreateUsers />} />
        <Route path="/Createdb_catusers" element={<Createdb_catusers />} />
        <Route path="/EditUser/:users_id" element={<EditUser />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Alldb_catusers" element={<Alldb_catusers />} />
        <Route path="/EditUserdb_catusers/:catusers_id" element={<EditUserdb_catusers />} />
        <Route path="/Editdb_catwithdraw/:catwithdraw_id" element={<Editdb_catwithdraw />} />
        <Route path="/EditUserdb_pricerubbers/:pricerubbers_id" element={<EditUserdb_pricerubbers />} />
        <Route path="/Alldb_catwithdraw" element={<Alldb_catwithdraw />} />
        <Route path="/Createdb_catwithdraw" element={<Createdb_catwithdraw />} />
        <Route path="/Alldb_pricerubbers" element={<Alldb_pricerubbers />} />
        <Route path="/Createdb_pricerubbers" element={<Createdb_pricerubbers />} />
        <Route path="/Alldb_customer" element={<Alldb_customer />} />
        <Route path="/Createdb_customer" element={<Createdb_customer />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
