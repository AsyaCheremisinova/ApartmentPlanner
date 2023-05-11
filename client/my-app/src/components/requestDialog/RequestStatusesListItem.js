import { Box, Typography } from "@mui/material"
import colors from '../../Themes/colors'
import { StatusIndicator } from "./StatusIndicator"

export const RequestStatusesListItem = ({requestStatus}) => {

    return(
        <Box sx={{
            marginBottom: 1,
            width: "98%",
            backgroundColor: colors.brownTwo,
            height: 180,
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
                    {"Дата изменения: " + requestStatus.date}
                </Typography>

                <StatusIndicator status={requestStatus.status}/>
            </Box>

            <Box sx={{
                height: 130,
                width: "100%",
            }}>    
                {/* <Typography>
                    {"Комментарий: " + requestStatus.commentary}
                </Typography> */}
            </Box>
        </Box>
    )
}