import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import logo from './dom.jpg';
import colors from '../Themes/colors'

function Header()  {
    return (
    <Box  sx={{backgroundColor: colors.lightBrown,
              height:'10%',
              display: 'flex',
              flexDirection: 'row'}}>
      <Box sx={{width:'10%'}}>
        {/* <img src={logo} className="head-logo" alt="logo" height={70}/>   */}
      </Box>
      <Box sx={{width:'80%'}}>
        <Typography className="head_h1" sx={{
          color:colors.white,
          fontSize:45,
          marginBottom:1,
          fontWeight:'bold'}}>MY HOME</Typography>  
      </Box>
    </Box>
    )}
    export default Header;
