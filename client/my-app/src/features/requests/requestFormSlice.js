import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    furniture: {
        name: "",
        link: "",
        height: "",
        width: "",
        depth: ""
    },
    categories: [],
    selectedCategory: 1,
    requestIsNew: true,
    requestId: 0
} 

export const requestFormSlice = createSlice({
    name: 'requestForm',
    initialState: initialState,
    reducers: {
        setAllCategories: (state, action) => {
            state.categories = action.payload
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setFurnitureInfo: (state, action) => {
            state.furniture = action.payload
        },
        setRequestId: (state, action) => {
            state.requestIsNew = false
            state.requestId = action.payload
        },
        clearRequest: (state) => {
            state.furniture = {
                name: "",
                link: "",
                height: "",
                width: "",
                depth: ""
            }
            state.categories = []
            state.selectedCategory = 1
            state.requestIsNew = true
            state.requestId = 0
        }
    },
})

export const { setAllCategories, setSelectedCategory, setFurnitureInfo, setRequestId, clearRequest } = requestFormSlice.actions

export default requestFormSlice.reducer