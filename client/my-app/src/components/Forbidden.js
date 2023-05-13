import { Box, Typography } from "@mui/material"

export const Forbidden = () => {
    return (            
        <Box sx={{
            height: "100%",
            display: 'flex',
            alignItems: 'center'
        }}>
            <Typography sx={{
                fontSize: 22
            }}>
                Вы не можете просматривать данную страницу
            </Typography>
        </Box>
    )
}