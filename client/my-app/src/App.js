import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/header/Header';
import { RequestDialogBox } from './components/requestDialog/RequestDialogBox';
import { AuthForm } from './components/auth/AuthForm';
import { MainPage } from './pages/MainPage'
import { ProfileDialogBox } from './components/profile/ProfileDialogBox'
import { RequestEditingPage } from './pages/RequestEditingPage';
import { MessageBox } from './components/message/MessageBox'

export const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{
                m: 0,
                minHeight:'100%',
                display: 'flex',
            }}> 
                <RequestDialogBox/>
                <ProfileDialogBox/>
                <MessageBox/>
                
                <Header/>
                <Routes>
                    <Route path="/" exact element={<AuthForm/>}/>
                    <Route path="/Requests" exact element={<MainPage/>}/>
                    <Route path="/Addition" exact element={<RequestEditingPage/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
