import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    message: ""
} 

export const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        open: (state, action) => {
            state.isOpen = true
            state.message = action.payload
        },
        close: (state) => {
            state.isOpen = false
            state.message = ""
        },
    },
})

export const { open, close } = messageSlice.actions

export default messageSlice.reducer