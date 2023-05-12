import axios from 'axios'
import { setAllCategories } from '../../features/requests/requestFormSlice'

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Category`, {
                withCredentials: true,
                headers: {
                    "Authorization": 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6Ijg4MjM2YTVlLWQ2ZmItNGJhNy1iZmQxLWEwYmJkMmJiNjBiNiIsInN1YiI6IlVzZXIiLCJlbWFpbCI6IkVtYWlsIiwianRpIjoiMTNkMDg4NDItZDAxNi00MmY0LTkxOWQtNTRiODU2YWU4ZGQ4IiwibmJmIjoxNjgzOTE4MzgyLCJleHAiOjE2ODM5MjE5ODIsImlhdCI6MTY4MzkxODM4MiwiaXNzIjoiQXBhcnRtZW50UGxhbm5lciIsImF1ZCI6IkFwYXJ0bWVudFBsYW5uZXIifQ.khNhA3LNOLpBkSMn-VTrsm-k_TBENL7L7HabFnXDWRcrGMTYwstEHAKQXSYJhwK7dkC3LHqn5Dz6yOfwlBc8TA',
                }
            })
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

