import { Box, ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { useDispatch, useSelector } from "react-redux"
import { authorize } from "../../app/actions/authorize"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export const ButtonBlock = () => {
    
    const isLogged = useSelector(store => store.user.isLogged)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLogged)
            navigate("/Requests")
    }, [isLogged])

    const handleClick = () => {
        dispatch(authorize())
    }

    return(
        <Box sx={{
        }}>
            <ButtonBase sx={{
                width: 130,
                height: 50,
                borderRadius: 2,
                padding: 1,
                boxShadow: 1,
                backgroundColor: colors.yellow,
            }} onClick={handleClick}>
                <Typography sx={{
                    color: colors.white,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    Войти
                </Typography>
            </ButtonBase>
        </Box>
    )
}