import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { RequestMessage } from "./RequestMessage"

export const RequestMessageBox = ({data}) => {

    const isOpen = useSelector(store => store.requestMessage.isOpen)

    return(
        <>{isOpen === true ? 
            <Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                position: 'absolute',
                width: '100%',
                minHeight:"100%",
                m: 0,
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                display: "flex"
            }}>
                <RequestMessage data={data}/>
            </Box> : null}
        </>
    )
}