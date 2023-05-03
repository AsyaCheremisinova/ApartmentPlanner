import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    requests: []
} 

export const requestsSlice = createSlice({
    name: 'request',
    initialState: initialState,
    reducers: {
        setAllRequests: (state, action) => {
            state.requests = action.payload
        },
    },
})

export const { setAllRequests } = requestsSlice.actions

export default requestsSlice.reducer