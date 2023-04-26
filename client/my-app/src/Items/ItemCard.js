import React from 'react';
import { Box, Container, Typography, Button, Dialog } from '@mui/material';
import colors from '../Themes/colors';
import img from './divan.jpg'
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import {open} from '../features/requests/editingSlice';



function ItemCard (props) {
    const {openCard, onClose} = props;
    const request = props.request
    console.log(request)
    const requestName = request.name
    console.log(requestName)

    const dispatch = useDispatch()

    const onOpenRequest = () => {
        dispatch(open(request))
        console.log(request)
    };

    const handleClose = () => {
        onClose();
        };

    return (
        <Dialog sx={{
            width:'100%',
            height: '100%',
            alignContent:"center",
            minWidth:'100%',
            maxWidth:600
            }}
            open={openCard}
            onClose={handleClose}> 
             <Box sx={{display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.lightBrown,
                    minWidth:600,
                    maxWidth:600}}>
            
                <div style={{position:'absolute'}}>
                <Box sx={{backgroundColor: colors.yellow,                               
                        marginLeft:2,
                        marginTop:1,
                        boxShadow:4,
                        borderRadius:1
                        }}>
                    <Typography sx={{
                                textAlign:'center',
                                color: colors.white,
                                padding:0.5,
                                paddingRight:2,
                                paddingLeft:2,
                                fontWeight: 'bold'}}>{request.status.name}
                    </Typography>
                </Box>
                </div>
                <Container sx={{height:'60%',                        
                        display: 'flex', 
                        alignItems: 'flex-center',
                        backgroundColor: colors.white,
                        boxShadow:4}}>
                            <Box component="img" sx={{maxWidth: '100%',
                            objectFit:'contain',
                            alignContent: 'center',
                            maxHeight:'300px',
                            m: 'auto'}}
                            alt="Изображение"
                            src={request.image}/>               
                </Container>                 
           
            <Box sx={{height:'40%',
                    display:'flex',
                    flexDirection:'column'}}>
                <Typography sx={{textAlign:'center',
                                color: colors.white,
                                height:'10%',
                                fontSize:20}}>{request.name}</Typography>
                <Box sx={{height:'72%',
                        display:'flex',
                        flexDirection:'row'}}>
                            <Box sx={{width:'35%', color: colors.white}}>
                                <Typography sx={{textAlign:'center'}}>Размеры</Typography>
                                <Typography sx={{marginLeft:3}} noWrap={true}>Высота:   {request.height}</Typography>
                                <Typography sx={{marginLeft:3}} noWrap={true}>Ширина:   {request.width}</Typography>
                                <Typography sx={{marginLeft:3}} noWrap={true}>Глубина:  {request.depth}</Typography>
                            </Box>
                            <Box sx={{width:'66%', color: colors.white}}>
                                 <Typography sx={{textAlign:'center'}}>Информация</Typography>
                                 <Typography sx={{marginLeft:3}} noWrap={true}>Материал:   {request.material}</Typography>
                                 <Typography sx={{marginLeft:3}} noWrap={true}>Производитель:   {request.manufacturer}</Typography>
                                 <Typography sx={{marginLeft:3}} noWrap={true}>Ссылка на товар:   {request.link}</Typography>
                                 <Typography sx={{marginLeft:3}} noWrap={true}>Файл:</Typography>
                            </Box>
                </Box>    
                <Box sx={{display: 'flex', 
                    justifyContent: 'flex-end',
                    height:'18%'}}>

                        { request.status.name == "Черновик" ?                            
                            <Link  to ="/Editing" sx={{width:'50%'}}
                                   style={{textDecoration:'none'}} >  
                                <Button                             
                                    variant="contained" 
                                    sx={{color: colors.white,
                                        borderColor: colors.white,
                                        backgroundColor: colors.brownTwo,
                                        boxShadow:4,
                                        minWidth: 'auto',
                                        marginRight:1,
                                        marginBottom:1}}
                                        onClick={onOpenRequest}
                                        >
                                    Редактировать
                                </Button>
                            </Link>                       
                            :null
                        }

                   
                </Box>      
               
            </Box>  
            </Box>            

        </Dialog>
    )}
    export default ItemCard;

