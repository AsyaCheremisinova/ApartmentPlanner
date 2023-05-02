import axios from 'axios'
import { setAll } from "../../features/requests/requestsSlice";

export const getRequests = () => {
    return async (dispatch) => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Request`)
        const requests = response.data.map((request) => {
            return ({
                id: request.id,
                name: request.name,
                height: request.height,
                width: request.width,
                depth: request.depth,
                material: request.material,
                manufacturer: request.manufacturer,
                link: request.link,
                image: request.image,
                status: {
                    id: request.status.id,
                    name: request.status.name,
                }

            })
        })
        dispatch(setAll(requests))
    }
}