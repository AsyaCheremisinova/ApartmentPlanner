import { useSelector } from "react-redux"
import { RequestsList } from "../components/requestList/RequestsList"
import { Forbidden } from "../components/Forbidden"
import { Box } from "@mui/material"
import colors from "../Themes/colors"

export const MainPage = () => {
    
    const roleId = useSelector(store => store.user.user.roleId)

    const getPageContent = () => {
        console.log(roleId)

        switch (roleId) {
            case 2: return <RequestsList/>
            case 3: return <RequestsList/>
            default: return <Forbidden/>
        }
    }

    return (
        <Box sx={{
            paddingTop: "90px",
            backgroundColor: colors.lightGray,
            display: 'flex',            
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}>
            {getPageContent()}
        </Box>           
    )
}