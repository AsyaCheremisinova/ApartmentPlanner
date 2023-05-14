import { useSelector } from "react-redux"
import { Forbidden } from "../components/Forbidden"
import { Box } from "@mui/material"
import colors from "../Themes/colors"
import { RequestUploadForm } from "../components/requestForm/RequestUploadForm"

export const RequestEditingPage = () => {
    
    const roleId = useSelector(store => store.user.user.roleId)

    const getPageContent = () => {
        console.log(roleId)

        switch (roleId) {
            case 2: return <RequestUploadForm/>
            default: return <Forbidden/>
        }
    }

    return (
        <Box sx={{
            paddingTop: "90px",
            backgroundColor: colors.lightGray,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        }}>
            {getPageContent()}
        </Box>           
    )
}