import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from '../../Themes/colors'
import { useSelector } from 'react-redux';
import { ProfileButton } from './ProfileButton';

export const Header = () => {

    const isLogged = useSelector(store => store.user.isLogged)

    const getButton = () => {
        if (isLogged)
            return <ProfileButton/>
    }

    return (
        <Box sx={{
            backgroundColor: colors.lightBrown,
            height: 90,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            position: 'fixed',
            zIndex: 1,
            boxShadow: 1,
            justifyContent: 'space-between'
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

            {getButton()}
        </Box>
    )
}
