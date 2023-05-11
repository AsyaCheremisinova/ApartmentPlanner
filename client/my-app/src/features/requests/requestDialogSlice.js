import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    request: [],
    isOpen: false
} 

export const requestDialogSlice = createSlice({
    name: 'requestDialog',
    initialState: initialState,
    reducers: {
        open: (state, action) => {
            state.isOpen = true
            state.request = action.payload
        },
        close: (state) => {
            state.isOpen = false
            state.request = {}
        }
    },
})

export const { open, close } = requestDialogSlice.actions

export default requestDialogSlice.reducer