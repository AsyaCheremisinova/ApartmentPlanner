import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import ListOfItems from './Items/ListOfItems';
import Editing from './Editing/Editing';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/header/Header';
import { RequestUploadForm } from './components/requestForm/RequestUploadForm';

export const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{
                m:0,
                height:'100%'
            }}> 
                <Header/>
                <Routes>
                    <Route path="/" exact element={<ListOfItems/>} />
                    <Route path="/Addition" exact element={<RequestUploadForm/>} />
                    <Route path="/Editing" exact element={<Editing/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
