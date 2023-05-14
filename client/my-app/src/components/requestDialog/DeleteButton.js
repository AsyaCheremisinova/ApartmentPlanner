import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonBase } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import colors from "../../Themes/colors";
import { open } from '../../features/requests/requestMessageSlice';
import { deleteRequest } from '../../app/actions/deleteRequest'

export const DeleteButton = () => {

    const dispatch = useDispatch()
    const roleId = useSelector(store => store.user.user.roleId)
    const requestId = useSelector(store => store.requestDialog.request.id)

    const handleClick = () => {
        if (roleId == 3) {
            dispatch(open(5))
        }
        else {
            dispatch(deleteRequest(requestId))
        }
    }

    return(
        <ButtonBase onClick={handleClick} sx={{
            backgroundColor: colors.statusRed,
            borderRadius: 2,
            padding: 1,
            boxShadow: 1,
            width: 50,
            height: 50,
            margin: 0.5
        }}>
            <DeleteIcon sx={{
                color: colors.white
            }}/>
        </ButtonBase>
    )
}