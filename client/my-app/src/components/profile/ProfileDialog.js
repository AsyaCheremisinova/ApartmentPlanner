import { Box, ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors";
import { useDispatch } from "react-redux";
import { close } from '../../features/auth/profileDialogSlice'
import CloseIcon from '@mui/icons-material/Close';
import { ProfileDialogData } from "./ProfileDialogData";
import { useNavigate } from 'react-router-dom'
import { setIsLogged, setUser } from '../../features/auth/userSlice'
import { close as closeRequest } from '../../features/requests/requestDialogSlice'
import { close as closeProfile } from '../../features/auth/profileDialogSlice'

export const ProfileDialog = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => {
        dispatch(close())
    }

    const handleLogout = () => {
        dispatch(setIsLogged(false))
        dispatch(setUser({}))
        dispatch(closeProfile())
        dispatch(closeRequest())
        navigate("/")
    }

    return(
        <Box sx={{
            position: "fixed",
            height: 400,
            width: 350,
            backgroundColor: colors.brownTwo,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'space-evenly'
        }}>
            <ButtonBase onClick={handleClose} sx={{
                position: 'absolute',
                height: 38,
                width: 38,
                right: 2,
                top: 2,
            }}>
                <CloseIcon sx={{ color: colors.white }}/>
            </ButtonBase>
            
            <ProfileDialogData/>

            <ButtonBase sx={{
                width: 100,
                height: 50,
                borderRadius: 2,
                padding: 1,
                boxShadow: 1,
                backgroundColor: colors.yellow,
            }} onClick={() => handleLogout()}>
                <Typography sx={{
                    color: colors.white,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                    Выйти
                </Typography>
            </ButtonBase>
        </Box>
    )
}