import axios from "axios"
import store from "../store"
import { getRequests } from '../../app/actions/getRequests'
import { close as closeDialog } from '../../features/requests/requestDialogSlice'

export const deleteRequest = (requestId) => {
    return async (dispatch) => {
        try {
            const token = store.getState().user.token

            await axios.delete(`${process.env.REACT_APP_API_URL}/api/Request/${requestId}`, {
                headers: {
                    'Authorization': token,
                }
            })
            
            dispatch(closeDialog())
            dispatch(getRequests())

        } catch (error) {
            console.error(error)
        }
    }
}
