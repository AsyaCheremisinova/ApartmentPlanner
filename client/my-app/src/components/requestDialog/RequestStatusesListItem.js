import { Box, Typography } from "@mui/material"
import colors from '../../Themes/colors'
import { StatusIndicator } from "./StatusIndicator"

export const RequestStatusesListItem = ({requestStatus}) => {

    const getDate = () => {
        let date = new Date(requestStatus.date)

        let day = date.getDay()
        if (day < 10)
            day = "0" + day
        
        let month = date.getMonth()
        if (month < 10)
            month = "0" + month
        
        return `${day}.${month}.${date.getFullYear()}`
    }

    return(
        <Box sx={{
            marginBottom: 1,
            width: "98%",
            backgroundColor: colors.brownTwo,
            height: 172,
            borderRadius: 2
        }}>
            <Box sx={{
                height: 56,
                paddingX: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>    
                <Typography sx={{

                }}>
                    {getDate()}
                </Typography>

                <StatusIndicator status={requestStatus.status}/>
            </Box>

            <Box sx={{
                height: 108,
                overflow: 'scroll',
                marginX: 1,
                backgroundColor: colors.brownTwoAdditional,
                borderRadius: 2
            }}>    
                <Typography sx={{
                    margin: 1
                }}>
                    {requestStatus.commentary}
                </Typography>
            </Box>
        </Box>
    )
}