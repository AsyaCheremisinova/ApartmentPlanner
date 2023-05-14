import { Box, Typography } from "@mui/material"
import colors from '../../Themes/colors'
import { StatusIndicator } from "./StatusIndicator"

export const RequestStatusesListItem = ({requestStatus}) => {

    const getDate = () => {
        let date = new Date(requestStatus.date)
            .toLocaleDateString("ru")

        return(date)
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