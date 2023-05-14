import { Box, ButtonBase, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import colors from "../../Themes/colors"
import { makeNewRequest } from '../../app/actions/makeNewRequest'
import { open } from "../../features/requests/requestMessageSlice"

export const RequestSendBlock = ({data}) => {
    const furniture = useSelector(store => store.requestForm.furniture)
    const selectedCategory = useSelector(store => store.requestForm.selectedCategory)
    const requestIsNew = useSelector(store => store.requestForm.requestIsNew)
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(makeNewRequest({
            furniture: furniture,
            selectedCategory: selectedCategory,
            image: data.image,
            sourceFile: data.sourceFile
        }))
    }

    const handleSend = () => {
        dispatch(open(2))
    }

    return( 
        <Box sx={{
            height: "10%",
            width: "50%",
            display: "flex",
            flexDirection: "row"
        }}>       
            <Box sx={{
                width: '50%',
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>                
                <ButtonBase onClick={() =>
                    handleSave()
                } sx={{
                    width: 160,
                    height: 50,
                    borderRadius: 2,
                    padding: 1,
                    boxShadow: 1,
                    backgroundColor: colors.lightBrown,
                    margin: 1
                }}>
                    <Typography sx={{
                        color: colors.white
                    }}>
                        Сохранить заявку
                    </Typography>
                </ButtonBase> 
            </Box>

            <Box sx={{
                width: '50%',
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>                
                <ButtonBase onClick={() =>
                    handleSend()
                } sx={{
                    width: 160,
                    height: 50,
                    borderRadius: 2,
                    padding: 1,
                    boxShadow: 1,
                    backgroundColor: requestIsNew ? colors.brownTwoAdditional : colors.lightBrown,
                    opacity: requestIsNew ? 0.7 : 1,
                    margin: 1
                }} disabled={requestIsNew}>
                    <Typography sx={{
                        color: colors.white
                    }}>
                        Отправить заявку
                    </Typography>
                </ButtonBase> 
            </Box> 
        </Box>  
    )
}