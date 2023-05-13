import { Box, Input } from "@mui/material"
import KeyIcon from '@mui/icons-material/Key';
import colors from "../../Themes/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux"
import { setLogin, setPassword } from "../../features/auth/authSlice";

export const TextForm = () => {

    const login = useSelector(store => store.auth.login)
    const password = useSelector(store => store.auth.password)

    const dispatch = useDispatch()

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value))
    }

    const handleLoginChange = (e) => {
        dispatch(setLogin(e.target.value))
    }

    return (
        <Box sx={{
            width: 380,
            height: 180,
            display: 'flex',
            justifyContent: "space-evenly",
            alignContent: 'center',
            flexDirection: "column",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-between',
                paddingX: 7
            }}>
                <AccountCircleIcon sx={{
                    color: colors.white,
                    width: 35,
                    height: 35
                }}/>
                
                <Input placeholder="Логин" 
                    value={login}
                    onChange={e => handleLoginChange(e)} 
                    sx={{
                        border: '3px solid ' + colors.white,
                        padding: 1,
                        color: colors.white, 
                        borderRadius: 1,
                        width: 200,
                        height: 50,
                        backgroundColor: 'rgba(255,255,255,0.05)'
                    }} disableUnderline
                />
            </Box>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-between',
                paddingX: 7
            }}>
                <KeyIcon sx={{
                    color: colors.white,
                    width: 35,
                    height: 35
                }}/>
                
                <Input placeholder="Пароль"
                    value={password}
                    onChange={e => handlePasswordChange(e)} 
                    sx={{
                        border: '3px solid ' + colors.white,
                        padding: 1,
                        color: colors.white, 
                        borderRadius: 1,
                        width: 200,
                        height: 50,
                        backgroundColor: 'rgba(255,255,255,0.05)'
                    }} disableUnderline type="password"
                />
            </Box>
        </Box>
    )
}