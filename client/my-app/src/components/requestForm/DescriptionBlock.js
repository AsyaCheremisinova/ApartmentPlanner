import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../app/actions/getCategories'
import { setFurnitureInfo, setSelectedCategory } from "../../features/requests/requestFormSlice"

export const DescriptionBlock = () => {
    
    const dispatch = useDispatch()
    const categories = useSelector(store => store.requestForm.categories)
    const selectedCategory = useSelector(store => store.requestForm.selectedCategory)
    const furniture = useSelector(store => store.requestForm.furniture)
    
    const handleChange = (event) => {
        dispatch(setSelectedCategory(event.target.value))
    };

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return(
        <Box sx={{
            height: "40%",
            width: "50%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            <Box sx={{
                width: "100%",
                height: "10%",
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    fontWeight: 'bolder'
                }}>
                    ИНФОРМАЦИЯ
                </Typography>
            </Box>

            <Box sx={{
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent: 'center',
            }}>
                <TextField
                    label="Название" 
                    variant="standard"
                    value={furniture.name}
                    onChange={e => dispatch(setFurnitureInfo({...furniture, name: e.target.value}))}
                    InputLabelProps={{
                    }}
                    sx={{
                        width: '60%',
                }}/>
            </Box>

            <Box sx={{
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent: 'center',
            }}>
                <TextField
                    label="Ссылка на товар" 
                    variant="standard"
                    value={furniture.link}
                    onChange={e => dispatch(setFurnitureInfo({...furniture, link: e.target.value}))}
                    InputLabelProps={{
                    }}
                    sx={{
                        width: '60%',
                }}/>
            </Box>

            <Box sx={{
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent: 'center',
            }}>
                <FormControl variant="standard" sx={{
                    width: '60%',
                }}>
                    <InputLabel>Категория</InputLabel>
                    <Select 
                        label="Category" 
                        onChange={handleChange} 
                        value={selectedCategory}
                    >
                        <MenuItem key={0} value={0}>
                            Не выбрано
                        </MenuItem>
                        {categories.map((category) => 
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}