import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from '../../Themes/colors'

export const Header = () => {
    return (
        <Box sx={{
            backgroundColor: colors.lightBrown,
            height: 90,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            display: 'flex',
            position: 'fixed',
            zIndex: 1,
            boxShadow: 1
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
