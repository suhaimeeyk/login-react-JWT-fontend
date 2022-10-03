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
import Test from './Test'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/album" element={<Album />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CreateUsers" element={<CreateUsers />} />
        <Route path="/EditUser/:users_id" element={<EditUser />} />
        <Route path="/Test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
