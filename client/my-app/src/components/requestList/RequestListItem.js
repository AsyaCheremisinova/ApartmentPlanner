import { Box, ButtonBase, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import colors from "../../Themes/colors"
import { useDispatch } from "react-redux"
import axios from "axios"
import { open } from '../../features/requests/requestDialogSlice'

export const RequestsListItem = ({request}) => {
    const [image, setImage] = useState()
    const dispatch = useDispatch()

    useEffect(() => {{
        const downloadImage = () => {
            axios.get(`${process.env.REACT_APP_API_URL}/api/File/${request.furniture.imageId}`, { 
                responseType: 'blob' 
            }).then((response) => {
                setImage(window.URL.createObjectURL(new Blob([response.data])))
            }, (error) => {
                console.log(error)
            })
        }
        downloadImage()
    }}, [])

    const handleClick = () => {
        dispatch(open(request))
    }

    return (
        <ButtonBase sx={{
            backgroundColor: colors.lightBrown, 
            height: 250,
            width: 450,
            borderRadius:2,
            boxShadow:8,
            display: 'flex',
            margin: 1
        }} onClick={handleClick}>
            <Box sx={{
                borderRadius: 2,
                height: "100%",
                width: 250,
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}/>

            <Box sx={{
                width: 200,
                height: 250,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography noWrap={true} sx={{
                    maxWidth: 170,
                    height: 40,
                    color: colors.white,
                    margin: 1,
                    fontSize: 20,
                }}>
                    {request.furniture.name}
                </Typography>
                
                <Typography noWrap={true} sx={{
                    maxWidth: 170,
                    height: 40,
                    color: colors.white,
                    fontSize: 16,
                    alignSelf: 'flex-start',
                    marginLeft: 2,
                    marginTop: 2.5
                }}>
                    {"Категория: " + request.furniture.category.name}
                </Typography>

                <Typography noWrap={true} sx={{
                    maxWidth: 170,
                    height: 40,
                    color: colors.white,
                    fontSize: 16,
                    alignSelf: 'flex-start',
                    marginLeft: 2
                }}>
                    {"Ширина: " + request.furniture.width}
                </Typography>
                
                <Typography noWrap={true} sx={{
                    maxWidth: 170,
                    height: 40,
                    color: colors.white,
                    fontSize: 16,
                    alignSelf: 'flex-start',
                    marginLeft: 2
                }}>
                    {"Высота: " + request.furniture.height}
                </Typography>
                
                <Typography noWrap={true} sx={{
                    maxWidth: 170,
                    height: 40,
                    color: colors.white,
                    fontSize: 16,
                    alignSelf: 'flex-start',
                    marginLeft: 2
                }}>
                    {"Глубина: " + request.furniture.depth}
                </Typography>
            </Box>
        </ButtonBase>
    )
}