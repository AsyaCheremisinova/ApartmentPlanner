import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { Message } from "./Message"

export const MessageBox = () => {
    const isOpen = useSelector(store => store.message.isOpen)

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
                <Message/>
            </Box> : null}
        </>
    )
}