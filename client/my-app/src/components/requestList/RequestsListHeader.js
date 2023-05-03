import { Box, ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { Link } from "react-router-dom"

export const RequestsListHeader = () => {
    return(
        <Box sx={{
            height:'10%',
            display: 'flex',            
            flexDirection: 'row',
            width: "60%",
            p: 1,
            alignItems: 'center'
        }}>
            <Typography sx={{
                width:'70%',
                fontSize: 30,
                color: colors.brown,
                fontWeight:'bold'
            }}>
                СПИСОК ЗАЯВОК
            </Typography>

            <Box sx={{
                width: '30%',
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
                    }}>
                        <Typography sx={{
                            color: colors.white
                        }}>
                            Создать заявку
                        </Typography>
                    </ButtonBase>
                </Link>
            </Box>
        </Box>
    )
}