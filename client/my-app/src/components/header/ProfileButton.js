import { Box, ButtonBase } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import colors from "../../Themes/colors";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/auth/profileDialogSlice";

export const ProfileButton = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(open())
    }

    return(
        <Box sx={{
            height: "100%",
            display: 'flex',
            alignItems: 'center',
            marginRight: 5
        }}>
            <ButtonBase sx={{
                borderRadius: 10
            }} onClick={handleClick}>
                <AccountCircleIcon sx={{
                    color: colors.white,
                    width: 50,
                    height: 50
                }}/>
            </ButtonBase>
        </Box>
    )
}