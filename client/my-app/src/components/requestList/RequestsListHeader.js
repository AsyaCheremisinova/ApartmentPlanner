import { Box, ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { Link } from "react-router-dom"
import { clearRequest } from "../../features/requests/requestFormSlice"
import { useDispatch, useSelector } from "react-redux"

export const RequestsListHeader = () => {

    const roleId = useSelector(store => store.user.user.roleId)
    const dispatch = useDispatch()

    return(
        <Box sx={{
            height:'10%',
            display: 'flex',            
            flexDirection: 'row',
            padding: 1,
            width: "60%",
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>

            {roleId === 2
            ? 
            <>
            <Typography sx={{
                fontSize: 30,
                color: colors.brown,
                fontWeight:'bold'
            }}>
                СПИСОК ЗАЯВОК
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <Link to ="/Addition" style={{ 
                    textDecoration:'none',                    
                    display: "flex",
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <ButtonBase sx={{
                        width: 160,
                        height: 50,
                        borderRadius: 2,
                        boxShadow: 1,
                        backgroundColor: colors.orange,
                        m: 1
                    }} onClick={() => dispatch(clearRequest())}>
                        <Typography sx={{
                            color: colors.white
                        }}>
                            Создать заявку
                        </Typography>
                    </ButtonBase>
                </Link>
            </Box>
            </>
            : 
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography sx={{
                    fontSize: 30,
                    color: colors.brown,
                    fontWeight:'bold',
                }}>
                    СПИСОК ЗАЯВОК
                </Typography>
            </Box>}
        </Box>
    )
}