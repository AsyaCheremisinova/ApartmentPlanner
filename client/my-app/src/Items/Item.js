import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import colors from '../Themes/colors';
import img from './divan.jpg'
import ItemCard from './ItemCard';


function Item (props)  {

    const request = { ...props.props }
    const requestName = props.props.name

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        };

    const handleClose = (value) => {
        setOpen(false);
        };    

    return (
        <Box sx={{backgroundColor: colors.lightBrown, 
            height: 250,
            width: 500, 
            padding: 0, 
            marginLeft: '5%',
            marginTop:5, 
            borderRadius:2,
            boxShadow:8,
            display: 'flex',
            flexDirection: 'row'}}
            onClick={handleClickOpen}>                

                { open == true ?                            
                     <ItemCard
                     openCard={open}
                     onClose={handleClose}
                     request = {request}/>                           
                    :null
                }

<               Container sx={{width: '55%',
                        borderRadius:2,
                        backgroundColor: colors.white,
                        boxShadow:8,                       
                        display: 'flex', 
                        alignItems: 'flex-center',                        
                        }}>
                            <Box component="img" sx={{maxWidth: '100%',
                            objectFit:'contain',
                            height: '100%',
                            alignContent: 'center',
                            m: 'auto'}}
                            alt="Изображение"
                            src={request.image}/>               
                </Container>   

                <Box sx={{width: '45%',
                     borderRadius:2,
                     display: 'flex', 
                     flexDirection: 'column'}}>
                        <Box
                            sx={{height:'50%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center' ,
                            justifyContent: 'center'                          
                            }}
                        >
                            <Typography sx={{fontSize: 22,
                                            width: '100%',
                                            color: colors.white,
                                            display: 'flex',
                                            overflowWrap: 'anywhere',
                                            justifyContent: 'center'}}>
                                {request.name}
                            </Typography>
                    </Box>
                    <Box sx={{height:'50%',                        
                            display: 'flex',                            
                            justifyContent: 'center',
                            }}>
                        <Typography sx={{height:'50%',
                                        width:'75%',
                                        fontSize: 22,
                                        color: colors.white,
                                        bgcolor:colors.yellow,
                                        display: 'flex',
                                        overflowWrap: 'anywhere',
                                        alignItems: 'center' ,
                                        justifyContent: 'center',
                                        textAlign:'center',
                                        boxShadow:4,
                                        borderRadius:2,}}>
                            {request.status.name}
                        </Typography>

                    </Box>
                </Box>

        </Box>
    )}
    export default Item;
