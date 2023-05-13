import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { ProfileDialog } from './ProfileDialog' 

export const ProfileDialogBox = () => {
    const isOpen = useSelector(store => store.profile.isOpen)

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
                <ProfileDialog/>
            </Box> : null}
        </>
    )
}