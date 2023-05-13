import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: "",
    password: ""
} 

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
    },
})

export const { setLogin, setPassword } = authSlice.actions

export default authSlice.reducer