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
    selectedCategory: 0,
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
        }
    },
})

export const { setAllCategories, setSelectedCategory, setFurnitureInfo } = requestFormSlice.actions

export default requestFormSlice.reducer