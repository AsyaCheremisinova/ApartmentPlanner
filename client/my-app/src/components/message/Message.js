import { Box, ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { useDispatch, useSelector } from "react-redux"
import { close } from "../../features/messageSlice"

export const Message = () => {
    
    const message = useSelector(store => store.message.message)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(close())
    }

    return (
        <Box sx={{
            position: "fixed",
            height: 250,
            width: 350,
            backgroundColor: colors.lightBrown,
            borderRadius: 2,
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <Typography sx={{
                color: colors.white,
                maxWidth: 250,
                height: 120,
                overflow: 'hidden'
            }}>
                {message}
            </Typography>

            <ButtonBase sx={{
                width: 70,
                height: 50,
                borderRadius: 2,
                padding: 1,
                boxShadow: 1,
                backgroundColor: colors.brown,
                margin: 1
            }} onClick={() => handleClick()}>
                <Typography sx={{
                    color: colors.white
                }}>
                    ОК
                </Typography>
            </ButtonBase>
        </Box>
    )
}