import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    requestMessage: ""
} 

export const requestMessageSlice = createSlice({
    name: 'requestMessage',
    initialState: initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
            state.requestMessage = ""
        },
        changeMessage: (state, action) => {
            state.requestMessage = action.payload
        }
    },
})

export const { open, close, changeMessage } = requestMessageSlice.actions

export default requestMessageSlice.reducer