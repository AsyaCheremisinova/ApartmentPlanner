import { Box, Typography } from "@mui/material"
import colors from '../../Themes/colors'
import { TextForm } from "./TextForm"
import { ButtonBlock } from "./ButtonBlock"

export const AuthForm = () => {
    return(
        <Box sx={{
            paddingTop: "90px",
            width: '100%',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Box sx={{
                width: 500,
                height: 350,
                backgroundColor: colors.lightBrown,
                borderRadius: 2,
                boxShadow: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <Typography sx={{
                    color: colors.white,
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>
                    Вход
                </Typography>

                <TextForm/>
                
                <ButtonBlock/>
            </Box>
        </Box>
    )
}