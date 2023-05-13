import axios from 'axios'
import store from '../store'
import { setIsLogged, setToken, setUser } from '../../features/auth/userSlice'

export const authorize = () => {
    return async (dispatch) => {
        try {
            const credentials = store.getState().auth

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Auth/login`, {
                login: credentials.login,
                password: credentials.password
            })

            dispatch(setToken("bearer " + response.data.token))
            dispatch(setIsLogged(true))
            dispatch(setUser({
                roleId: response.data.roleId,
                email: response.data.email,
                name: response.data.name,
                login: response.data.login
            }))

        } catch (error) {
            
            console.log(error)
            dispatch(setIsLogged(false))
        }
    }
}