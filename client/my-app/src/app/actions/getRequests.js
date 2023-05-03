import { setAllRequests } from "../../features/requests/requestsSlice"
import axios from 'axios'

export const getRequests = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Request`)
            const requests = response.data.map((request) => {
                return({
                    id: request.id,
                    furniture: {
                        id: request.furniture.id,
                        name: request.furniture.name,
                        link: request.furniture.productLink,
                        height: request.furniture.height,
                        width: request.furniture.width,
                        depth: request.furniture.depth,
                        imageId: request.furniture.imageId,
                        sourceFileId: request.furniture.sourceFileId,
                        category: {
                            id: request.furniture.category.id,
                            name: request.furniture.category.name 
                        },
                    }
                })
            })

            dispatch(setAllRequests(requests))
        } catch (error) {
            console.error(error)
        }     
    }
}
