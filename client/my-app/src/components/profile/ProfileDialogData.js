import { Box, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { useSelector } from "react-redux"

export const ProfileDialogData = () => {

    const user = useSelector(store => store.user.user)
    
    const selectRole = () => {
        switch (user.roleId) {
            case 1: return "Администатор"
            case 2: return "Дизайнер"
            case 3: return "Редактор"
            case 4: return "Клиент"
            default: return "" 
        }
    }

    return(
        <Box sx={{
            height: 180,
            width: 350,
            display: 'flex',
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: 'column',
        }}>
            <Box sx={{
                display: 'felx',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography sx={{
                    maxWidth: 280,
                    color: colors.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                    display: "flex",
                    justifyContent: "center"
                }}>
                    {selectRole()}
                </Typography>

                <Typography sx={{
                    maxWidth: 280,
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: 20,
                    display: "flex",
                    justifyContent: "center"
                }} noWrap={true}>
                    {user.name}
                </Typography>
            </Box>

            <Box sx={{
                display: 'felx',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography sx={{
                    maxWidth: 280,
                    color: colors.white,
                    display: "flex",
                    justifyContent: "center"
                }} noWrap={true}>
                    {"Почта: " + user.email}
                </Typography>
                        
                <Typography sx={{
                    maxWidth: 280,
                    color: colors.white,
                    display: "flex",
                    justifyContent: "center"
                }} noWrap={true}>
                    {"Логин: " + user.login}
                </Typography>
            </Box>            
        </Box>
    )
}