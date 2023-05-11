import { Box, Typography } from "@mui/material"

export const StatusIndicator = ({status}) => {

    const selectColor = () => {

        switch (status.id) {
            case 1: return "blue"
            case 2: return "red"
            case 3: return "yellow"
            default: return "orange"
        }
    }

    return(
        <Box sx={{
            width: 100,
            height: 40,
            borderRadius: 2,
            backgroundColor: selectColor(),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography sx={{
            }}>
                {status.name}
            </Typography>
        </Box>
    )
}