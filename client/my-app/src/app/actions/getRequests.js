import { setAllRequests } from "../../features/requests/requestsSlice"
import axios from 'axios'
import store from "../store"

export const getRequests = () => {
    return async (dispatch) => {
        try {
            const token = store.getState().user.token
            
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Request`, {
                headers: {
                    Authorization: token
                }
            })
            
            const requests = response.data.map((request) => {
                return({
                    id: request.id,
                    user: {
                        id: request.user.id,
                        name: request.user.name
                    },
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
                    },                    
                    statusLines: request.statusLines.map((line) => {
                        return({
                            id: line.id,
                            commentary: line.commentary,
                            date: line.date,
                            status: {
                                id: line.status.id,
                                name: line.status.name
                            }
                        })
                    })  
                })
            })

            dispatch(setAllRequests(requests))
        } catch (error) {
            console.error(error)
        }     
    }
}
