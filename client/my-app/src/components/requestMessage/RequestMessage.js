import { Box, ButtonBase, Input, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { getRequests } from "../../app/actions/getRequests"
import { useDispatch, useSelector } from "react-redux"
import { changeMessage, close } from "../../features/requests/requestMessageSlice"
import { close as closeDialog } from "../../features/requests/requestDialogSlice"
import { changeRequestStatus, putRequest } from "../../app/actions/putRequest"

export const RequestMessage = ({data}) => {
    const furniture = useSelector(store => store.requestForm.furniture)
    const selectedCategory = useSelector(store => store.requestForm.selectedCategory)
    const message = useSelector(store => store.requestMessage.requestMessage)
    const targetStatusId = useSelector(store => store.requestMessage.targetStatusId)
    const requestId = useSelector(store => store.requestForm.requestId)
    const dialogRequestId = useSelector(store => store.requestDialog.request.id)

    const dispatch = useDispatch()

    const handleMessageChange = (e) => {
        dispatch(changeMessage(e.target.value))
    }

    const handleClick = () => {
        dispatch(close())

        if (targetStatusId === 2) {
            dispatch(putRequest({
                id: requestId,
                message: message,
                furniture: furniture,
                selectedCategory: selectedCategory,
                image: data.image,
                sourceFile: data.sourceFile
            }))
        } else {
            dispatch(changeRequestStatus(targetStatusId, dialogRequestId, message))
        }

        dispatch(closeDialog())
        dispatch(getRequests())
    }

    return(
        <Box sx={{
            position: "fixed",
            minHeight: 250,
            width: 350,
            backgroundColor: colors.lightBrown,
            borderRadius: 2,
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <Typography sx={{
                color: colors.white,
                maxWidth: 250,
                height: 50,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center'
            }}>
                Добавьте сообщение:
            </Typography>

            <Input placeholder="Комментарий"
                value={message}
                onChange={e => handleMessageChange(e)} 
                sx={{
                    border: '3px solid ' + colors.white,
                    padding: 1,
                    color: colors.white, 
                    borderRadius: 1,
                    width: 300,
                    height: 200,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    overflow: 'scroll'
                }} disableUnderline multiline
            />

            <ButtonBase sx={{
                width: 110,
                height: 50,
                borderRadius: 2,
                padding: 1,
                boxShadow: 1,
                backgroundColor: colors.brown,
                margin: 1
            }} onClick={() => handleClick()}>
                <Typography sx={{
                    color: colors.white
                }}>
                    Отправить
                </Typography>
            </ButtonBase>
        </Box>
    )
}