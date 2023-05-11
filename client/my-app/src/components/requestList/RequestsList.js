import { Box } from "@mui/material"
import colors from "../../Themes/colors"
import { RequestsListHeader } from "./RequestsListHeader"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRequests } from "../../app/actions/getRequests"
import { RequestsListItem } from "./RequestListItem"


export const RequestsList = () => {
    const requests = useSelector(store => store.request.requests)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRequests())
    }, [])

    return(
        <Box sx={{
            paddingTop: "90px",
            backgroundColor: colors.lightGray,
            display: 'flex',            
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}>
            <RequestsListHeader/>

            <Box sx={{
                width: '80%',
                display: "flex",
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row'
            }}>
                {requests.map((request) => <RequestsListItem key={request.id} request={request}/>)}
            </Box>
        </Box>
    )
}