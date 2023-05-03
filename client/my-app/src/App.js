import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import Editing from './Editing/Editing';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/header/Header';
import { RequestUploadForm } from './components/requestForm/RequestUploadForm';
import { RequestsList } from './components/requestList/RequestsList';

export const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{
                m: 0,
                minHeight:'100%',
                display: 'flex',
            }}> 
                <Header/>
                <Routes>
                    <Route path="/" exact element={<RequestsList/>} />
                    <Route path="/Addition" exact element={<RequestUploadForm/>} />
                    <Route path="/Editing" exact element={<Editing/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
