import { Box, Typography } from "@mui/material"
import colors from "../../Themes/colors"

export const StatusIndicator = ({status}) => {

    const selectColor = () => {

        switch (status.id) {
            case 1: return colors.statusBlue
            case 2: return colors.statusOrange
            case 3: return colors.statusDarkOrange
            case 4: return colors.statusGreen
            case 5: return colors.statusRed
            default: return 
        }
    }

    return(
        <Box sx={{
            width: 160,
            height: 40,
            borderRadius: 2,
            backgroundColor: selectColor(),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography sx={{
                color: colors.white
            }}>
                {status.name}
            </Typography>
        </Box>
    )
}