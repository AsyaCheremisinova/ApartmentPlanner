import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  requests: [],
  selectedRequests: []
} 

export const requestsSlice = createSlice({
  name: 'request',
  initialState: initialState,
  reducers: {
    setAll: (state, action) => {
      state.requests = action.payload
      state.selectedRequests = action.payload
    },
  },
})

export const { setAll } = requestsSlice.actions

export default requestsSlice.reducer