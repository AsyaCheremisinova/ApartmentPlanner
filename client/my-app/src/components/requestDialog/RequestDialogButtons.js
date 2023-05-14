import { Box, ButtonBase, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import colors from "../../Themes/colors"
import { DownloadButton } from "./DownloadButton"
import { DeleteButton } from "./DeleteButton"
import { useNavigate } from 'react-router-dom'
import { close } from "../../features/requests/requestDialogSlice"
import { setFurnitureInfo, setRequestId, setSelectedCategory } from "../../features/requests/requestFormSlice"
import { open } from "../../features/requests/requestMessageSlice"

export const RequestDialogButtons = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const statusId = useSelector(store => 
        store.requestDialog.request).statusLines[0].status.id
    const roleId = useSelector(store => store.user.user.roleId)
    const request = useSelector(store => store.requestDialog.request)

    const selectButtons = () => {
        
        if (roleId === 2 && (statusId === 1 || statusId === 3))
            return <DesignerButtons methods={{ 
                handleRequestEditing: handleRequestEditing 
            }}/>
        else if (roleId === 3 && statusId === 2)
            return <EditorButtons methods={{ 
                handleAccept: handleAccept,
                handleReject: handleReject
            }}/>
    }    

    const showDeleteButton = () => {
        if (statusId === 1 || roleId == 3 && statusId !== 4)
            return <DeleteButton/>
    }

    const handleAccept = () => {
        dispatch(open(4))
    }

    const handleReject = () => {
        dispatch(open(3))
    }

    const handleRequestEditing = () => {
        dispatch(setRequestId(request.id))
        dispatch(setSelectedCategory(request.furniture.category.id))
        dispatch(setFurnitureInfo(request.furniture))
        dispatch(close())
        navigate("/Addition")
    }

    return(
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        }}>
            {showDeleteButton()}
            <DownloadButton 
                fileId={request.furniture.sourceFileId} 
                requestName={request.furniture.name}
            />
            {selectButtons()}
        </Box>
    )
}

const DesignerButtons = ({methods}) => {
    return(
        <ButtonBase sx={{
            width: 130,
            height: 50,
            borderRadius: 2,
            padding: 1,
            boxShadow: 1,
            backgroundColor: colors.brown,
            margin: 0.5   
        }} onClick={() => methods.handleRequestEditing()}>
            <Typography sx={{
                color: colors.white
            }}>
                Редактировать
            </Typography>
        </ButtonBase>
    )
}

const EditorButtons = ({methods}) => {
    return(
        <>
        <ButtonBase sx={{
            width: 130,
            height: 50,
            borderRadius: 2,
            padding: 1,
            boxShadow: 1,
            backgroundColor: colors.brown,
            margin: 0.5   
        }} onClick={() => methods.handleAccept()}>
            <Typography sx={{
                color: colors.white
            }}>
                Принять
            </Typography>
        </ButtonBase>

        <ButtonBase sx={{
            width: 130,
            height: 50,
            borderRadius: 2,
            padding: 1,
            boxShadow: 1,
            backgroundColor: colors.brown,
            margin: 0.5   
        }} onClick={() => methods.handleReject()}>
            <Typography sx={{
                color: colors.white
            }}>
                Доработать
            </Typography>
        </ButtonBase>
        </>
    )
}