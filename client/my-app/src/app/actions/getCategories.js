import axios from 'axios'
import { setAllCategories } from '../../features/requests/requestFormSlice'

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Category`)
            const categories = response.data.map((item) => { return ({
                id: item.id,
                name: item.name
            })})

            dispatch(setAllCategories(categories))
        } catch (error) {
            console.error(error)
        }     
    }
}

