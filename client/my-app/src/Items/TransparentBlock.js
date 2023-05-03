import React from 'react';
import { Box } from '@mui/material';
import colors from '../Themes/colors';


const TransparentBlock = () => {
    return (
        <Box sx={{backgroundColor: colors.black, 
            height: '100%',
            width: '100%', 
            padding: 0,
            opacity:'70%'                    
           }}>               
        </Box>
    )}
    export default TransparentBlock;
