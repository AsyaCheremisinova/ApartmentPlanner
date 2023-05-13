import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
} 

export const profileDialogSlice = createSlice({
    name: 'profileDialog',
    initialState: initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    },
})

export const { open, close } = profileDialogSlice.actions

export default profileDialogSlice.reducer