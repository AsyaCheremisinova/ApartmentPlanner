import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from '../../Themes/colors'

export const Header = () => {
    return (
        <Box sx={{
            backgroundColor: colors.lightBrown,
            height:'10%',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Box sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                ml: 2
            }}>
                <Typography sx={{
                    color: colors.white,
                    fontSize: 45,
                    fontWeight: 'bold'
                }}>
                    MY HOME
                </Typography>  
            </Box>
        </Box>
    )
}
