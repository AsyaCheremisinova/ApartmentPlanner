import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { RequestDialog } from "./RequestDialog"

export const RequestDialogBox = () => {
    const isOpen = useSelector(store => store.requestDialog.isOpen)

    return(
        <>{isOpen === true ?
            <Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                position: 'fixed',
                width: '100%',
                minHeight:"100%",
                m: 0,
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                display: "flex"
            }}>
                <RequestDialog/>
            </Box>
            : null}
        </>
    )
}