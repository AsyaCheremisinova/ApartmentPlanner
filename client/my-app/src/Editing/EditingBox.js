import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import colors from '../Themes/colors';
import img2 from './дома.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom"
import { useState } from 'react';
import { newRequest } from '../app/actions/newRequest';
import { useDispatch,useSelector } from 'react-redux' 
import { useEffect } from "react";
import Editing from './Editing';



function EditingBox () {
    

    // const dispatch = useDispatch()
    
    // const addRequest = () =>
    // {
    //     dispatch(newRequest(request))
    // }
    const requestInfo = useSelector(store => store.editing.requestInfo)
    const dispatch = useDispatch()
    // const isOpen = useSelector(store => store.editing.isOpen)

    // console.log(productInfo)
    // const onClose = () => {
    //   dispatch(close())
    // }
  


    return (    
        
        
        
    )}
    export default EditingBox;
