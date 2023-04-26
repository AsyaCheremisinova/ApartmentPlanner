import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import colors from '../Themes/colors';
import img2 from './дома.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom"
import { useState } from 'react';
import { newRequest } from '../app/actions/newRequest';
import { useDispatch } from 'react-redux' 
import { useEffect } from "react";


function Addition () {
 

    const [request, setRequest] = useState({
        name: "",
        width: "",
        height: "",
        depth: "",
        statusId: "d53253c0-067b-4a2a-bcb6-d8b593720431"
    });

    const dispatch = useDispatch()
    
    const addRequest = () =>
    {
        dispatch(newRequest(request))  }

    return (       
     
        <Box sx={{ 
            height:'90%',
            width: '100%', 
            padding: 0,           
            backgroundImage: `url(${img2})`
           }}> 
           <Box sx={{background: 'linear-gradient(to right, rgba(240,239,237,1) 50%, rgba(255,255,255,0)81%)',
                     display: 'flex',
                     flexDirection: 'row',
                     height:'100%'}}>
           <Box sx={{width:'70%',
                    display: 'flex',
                    flexDirection: 'column'}}>
                
                <Box sx={{height:'1%',
                        paddingTop:0.5}}> 
                    <Link to ="/" sx={{width:'50%'}}>  
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"                      
                        startIcon={<ArrowBackIosNewIcon />}
                        sx={{
                            marginLeft:'1%',
                            backgroundColor: colors.brown,
                            color:colors.white,
                            minWidth:'40px'
                            }}
                    ></Button>
                    </Link>
                </Box>

                <Box sx={{height:'9%',
                        }}>                    
                     <TextField id="TextName" label="Название" variant="standard"
                     sx={{width:'40%',
                        marginLeft:10}}
                        value={request.name}
                        onChange={e => setRequest({...request, name:e.target.value})}>                            
                    </TextField>
                </Box>

                <Box sx={{height:'40%',
                        display:'flex',
                        flexDirection:'column',
                        marginLeft:10}}>
                    <Box sx={{height:'25%',
                            }}>
                        <Typography sx={{marginTop:2,
                                        fontSize:'150%'}}>Размеры</Typography>
                    </Box>
                    <Box sx={{height:'25%'}}>
                        <TextField
                            sx={{width:'45%'}}
                            id="standard-number"
                            label="Высота(см)"
                            type="number"
                            variant="standard"
                            InputLabelProps={{shrink: true}}
                            value={request.height}
                            onChange={e => setRequest({...request, height:e.target.value})}>                                
                            </TextField>
                    </Box>
                    <Box sx={{height:'25%'}}>
                        <TextField
                            sx={{width:'40%'}}
                            id="standard-number"
                            label="Ширина(см)"
                            type="number"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={request.width}
                            onChange={e => setRequest({...request, width:e.target.value})}>
                        </TextField>    
                    </Box>
                    <Box sx={{height:'25%'}}>
                        <TextField
                            sx={{width:'40%'}}
                            id="standard-number"
                            label="Глубина(см)"
                            type="number"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={request.depth}
                            onChange={e => setRequest({...request, depth:e.target.value})}>
                            </TextField>
                    </Box>
                </Box>


                <Box sx={{height:'45%',
                        marginLeft:10}}>
                <Box sx={{height:'15%',
                            }}>
                        <Typography sx={{marginTop:2,
                                        fontSize:'150%'}}>Информация</Typography>
                    </Box>
                    <Box sx={{height:'20%'}}>
                        <TextField id="TextName" label="Материал" variant="standard"
                            sx={{width:'40%'}} />
                    </Box>
                    <Box sx={{height:'20%'}}>
                        <TextField id="TextName" label="Производитель" variant="standard"
                            sx={{width:'40%'}} />
                    </Box>
                    <Box sx={{height:'20%'}}>
                        <TextField id="TextName" label="Ссылка на товар" variant="standard"
                            sx={{width:'40%'}} />
                    </Box>
                    <Box sx={{height:'20%'}}>
                        
                    <Box sx={{marginTop:1,
                             display:'flex',
                             flexDirection:'row'}}>


                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span"
                            sx={{borderColor: colors.white,
                                backgroundColor: colors.yellow}}>
                            Выберите файл
                            </Button>
                        </label>

                        <input
                            accept="image/*"                            
                            id="contained-button-file"
                            multiple
                            type="file"
                             hidden = "hidden"
                        />
                       

                        <Box sx={{display: 'flex', 
                        justifyContent: 'flex-end',
                        height:'70%',
                        marginLeft:21}}>
                        <Button 
                            variant="contained" 
                            sx={{color: colors.white,
                                borderColor: colors.white,
                                backgroundColor: colors.brownTwo,
                                boxShadow:4,
                                minWidth: 'auto',
                                marginRight:1,
                                marginBottom:1}}
                            onClick={() => addRequest()}>
                            Сохранить
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{color: colors.white,
                                borderColor: colors.white,
                                backgroundColor: colors.brownTwo,
                                boxShadow:4,
                                minWidth: 'auto',
                                marginRight:1,
                                marginBottom:1}}>
                            Сохранить и отправить
                        </Button>
                    </Box>      
                    </Box>
                    </Box>
                </Box>
               

            </Box>           
            {/* <Box sx={{width:'30%',                      
                        backgroundImage: `url(${img})`}}>
                           
            </Box>     */}
            </Box>
        </Box>
    )}
    export default Addition;
