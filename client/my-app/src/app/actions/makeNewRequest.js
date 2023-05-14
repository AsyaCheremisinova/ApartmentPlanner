import axios from 'axios'
import store from '../store'
import { open } from '../../features/messageSlice'
import { setRequestId } from '../../features/requests/requestFormSlice'

export const makeNewRequest = (request) => {
    return async (dispatch) => {
        try {
            const formData = new FormData()

            formData.append("source_file", request.sourceFile)
            formData.append("image_file", request.image)
            formData.append("furniture_name", request.furniture.name)
            formData.append("furniture_link", request.furniture.link)
            formData.append("furniture_height", request.furniture.height)
            formData.append("furniture_width", request.furniture.width)
            formData.append("furniture_depth", request.furniture.depth)
            formData.append("category_id", request.selectedCategory)

            const token = store.getState().user.token

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Request`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                }
            })

            dispatch(open("Заявка сохранена"))
            dispatch(setRequestId(response.data))

        } catch (error) {
            console.error(error)
            dispatch(open("Ошибка при сохранении заявки"))
        }    
    }
}
