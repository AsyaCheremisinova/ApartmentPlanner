import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Header from './Header/Header'
import ListOfItems from './Items/ListOfItems';
import ItemCard from './Items/ItemCard'
import TransparentBlock from './Items/TransparentBlock';
import Editing from './Editing/Editing';
import Addition from './Addition/Addition';
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
  withRouter
} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Box sx={{m:0,
            height:'100%'}}> 
      <Header/>
      <Routes>
      {/* <div style={{position: "fixed",  height: '110%', width:'100%'}}> 
      <TransparentBlock/></div> */}
      
      {/* <div style={{display:'flex',position: "absolute", height:'100%', width:'50%', alignItems:'center', marginLeft:'25%'}}><ItemCard></ItemCard></div> */}
      <Route path="/" exact element={<ListOfItems/>} />
      <Route path="/Addition" exact element={<Addition/>} />
      <Route path="/Editing" exact element={<Editing/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
