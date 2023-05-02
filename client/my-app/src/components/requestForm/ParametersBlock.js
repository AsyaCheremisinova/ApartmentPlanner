import { Box, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setFurnitureInfo } from "../../features/requests/requestFormSlice"

export const ParametersBlock = () => {
    const dispatch = useDispatch()
    const furniture = useSelector(store => store.requestForm.furniture)
    
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
                    ПАРАМЕТРЫ
                </Typography>
            </Box>

            <Box sx={{
                width: "100%",
                height: "20%",
                display: "flex",
                justifyContent: 'center',
            }}>
                <TextField
                    label="Ширина (см.)" 
                    variant="standard"
                    value={furniture.width}
                    onChange={e => dispatch(setFurnitureInfo({...furniture, width: e.target.value}))}
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
                    label="Высота (см.)" 
                    variant="standard"
                    value={furniture.height}
                    onChange={e => dispatch(setFurnitureInfo({...furniture, height: e.target.value}))}
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
                    label="Глубина (см.)" 
                    variant="standard"
                    value={furniture.depth}
                    onChange={e => dispatch(setFurnitureInfo({...furniture, depth: e.target.value}))}
                    InputLabelProps={{
                    }}
                    sx={{
                        width: '60%',
                }}/>
            </Box>
        </Box>
    )
}