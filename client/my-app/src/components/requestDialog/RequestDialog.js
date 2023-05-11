import { useDispatch, useSelector } from "react-redux"
import { Box, ButtonBase, Link, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { close } from '../../features/requests/requestDialogSlice'
import colors from "../../Themes/colors";
import axios from "axios"
import { useEffect, useState } from "react";
import { DownloadButton } from "./DownloadButton";
import { RequestDialogStory } from "./RequestDialogStory";

export const RequestDialog = () => {
    const [image, setImage] = useState()
    const request = useSelector(store => store.requestDialog.request)
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
        console.log(request)
    }}, [])

    const handleClose = () => {
        dispatch(close())
    }

    return(
        <Box sx={{
            position: "fixed",
            height: 400,
            width: 800,
            backgroundColor: colors.brownTwo,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden'
        }}>
            <RequestDialogStory/>

            <Box sx={{
                borderRadius: 2,
                height: 400,
                width: 400,
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}/>
            
            <ButtonBase onClick={handleClose} sx={{
                position: 'absolute',
                height: 38,
                width: 38,
                right: 2,
                top: 2,
            }}>
                <CloseIcon sx={{ color: colors.white }}/>
            </ButtonBase>
            
            <Box sx={{
                width: 400,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
            }}>
                {/* Заголовок */}
                <Typography  noWrap={true} sx={{
                    maxWidth: 250,
                    height: 80,
                    fontSize: 25,
                    fontWeight: 'bold',
                    display: "flex",
                    color: colors.white,
                    alignItems: 'center'
                }}>
                    {request.furniture.name}
                </Typography>

                <Box sx={{
                    width: "85%",
                    height: 230,
                    display: "flex"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        width: "100%",
                    }}>
                        <Typography sx={{
                            color: colors.white,
                            fontSize: 17,
                        }} noWrap={true}>
                            {"Ширина: " + request.furniture.width + " см"}
                        </Typography>
                        
                        <Typography sx={{
                            color: colors.white,
                            fontSize: 17,
                        }} noWrap={true}>
                            {"Высота: " + request.furniture.height + " см"}
                        </Typography>
                        
                        <Typography sx={{
                            color: colors.white,
                            fontSize: 17,
                        }} noWrap={true}>
                            {"Глубина: " + request.furniture.depth + " см"}
                        </Typography>

                        
                        <Typography sx={{
                            color: colors.white,
                            fontSize: 17,
                            marginTop: 3
                        }} noWrap={true}>
                            <Link
                                href={request.furniture.link}
                                underline="none" sx={{
                                color: colors.white
                            }}>
                                {"Ссылка на товар: " + request.furniture.link}
                            </Link>
                        </Typography>

                        <Typography sx={{
                            color: colors.white,
                            fontSize: 17,
                            marginTop: 3
                        }} noWrap={true}>
                            {"Дизайнер: Иванов Иван"}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    width: "85%",
                    height: 50,
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}> 
                    <DownloadButton 
                        fileId={request.furniture.sourceFileId} 
                        requestName={request.furniture.name}
                    />

                    <ButtonBase sx={{
                        width: 130,
                        height: 50,
                        borderRadius: 2,
                        padding: 1,
                        boxShadow: 1,
                        backgroundColor: colors.brown,
                    }}>
                        <Typography sx={{
                            color: colors.white
                        }}>
                            Принять
                        </Typography>
                    </ButtonBase>
                    
                    <ButtonBase sx={{
                        width: 130,
                        height: 50,
                        borderRadius: 2,
                        padding: 1,
                        boxShadow: 1,
                        backgroundColor: colors.brown,
                    }}>
                        <Typography sx={{
                            color: colors.white
                        }}>
                            Отклонить
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    )
}