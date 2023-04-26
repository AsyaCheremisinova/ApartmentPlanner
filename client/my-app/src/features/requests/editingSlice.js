import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  requestInfo: [],
  isOpen: false
} 

export const editingSlice = createSlice({
  name: 'editing',
  initialState: initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true
      state.requestInfo = action.payload
      console.log(state.requestInfo)
      console.log(action.payload)
    },
    close: (state) => {
      state.isOpen = false
      state.requestInfo = {}
    }
  },
})

export const { open, close } = editingSlice.actions

export default editingSlice.reducer