import { Box } from "@mui/material"
import { useSelector } from 'react-redux'
import { RequestStatusesListItem } from "./RequestStatusesListItem"

export const RequestStatusesList = () => {
    
    const request = useSelector(store => store.requestDialog.request)

    return(
        <Box sx={{
            height: '90%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            overflow: 'scroll',
        }}>
            {request.statuseLines.map((requestStatus) => 
                <RequestStatusesListItem 
                    key={requestStatus.id} 
                    requestStatus={requestStatus}
                />
            )}
        </Box>
    )
}