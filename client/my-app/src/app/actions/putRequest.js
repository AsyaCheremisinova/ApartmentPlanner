import axios from 'axios'
import store from '../store'
import { open } from '../../features/messageSlice'
import { clearRequest, setRequestId } from '../../features/requests/requestFormSlice'
import { getRequests } from '../../app/actions/getRequests'
import { close as closeDialog } from '../../features/requests/requestDialogSlice'

export const putRequest = (request) => {
    return async (dispatch) => {
        try {
            dispatch(clearRequest())

            const formData = new FormData()

            formData.append("message", request.message)
            formData.append("source_file", request.sourceFile)
            formData.append("image_file", request.image)
            formData.append("furniture_name", request.furniture.name)
            formData.append("furniture_link", request.furniture.link)
            formData.append("furniture_height", request.furniture.height)
            formData.append("furniture_width", request.furniture.width)
            formData.append("furniture_depth", request.furniture.depth)
            formData.append("category_id", request.selectedCategory)

            const token = store.getState().user.token

            const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/Request/${request.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                }
            })

            dispatch(open("Заявка отправлена"))
            dispatch(setRequestId(response.data))

        } catch (error) {
            console.error(error)
            dispatch(open("Ошибка при отправке заявки"))
        }    
    }
}


export const changeRequestStatus = (status, requestId, commentary) => {
    return async (dispatch) => {
        try {
            const token = store.getState().user.token

            await axios.put(`${process.env.REACT_APP_API_URL}/api/Request/status/${requestId}`, {
                statusId: status,
                commentary: commentary
            }, {
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
