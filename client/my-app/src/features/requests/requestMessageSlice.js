import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    requestMessage: "",
    targetStatusId: 1
} 

export const requestMessageSlice = createSlice({
    name: 'requestMessage',
    initialState: initialState,
    reducers: {
        open: (state, action) => {
            state.isOpen = true
            state.targetStatusId = action.payload
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