import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    isLogged: false,
    user: {}
} 

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
})

export const { setToken, setIsLogged, setUser } = userSlice.actions

export default userSlice.reducer