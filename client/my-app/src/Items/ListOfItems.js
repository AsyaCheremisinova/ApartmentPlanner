import React from 'react';
import { Box,List, ListItem, Typography, Button } from '@mui/material';
import {Link} from "react-router-dom"
import colors from '../Themes/colors'
import Item from './Item'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from "react";
import { getRequests } from '../app/actions/request';

function ListOfItems ()  {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getRequests())
    }, [])

    const requests = useSelector(state => state.request.requests) 
    
    return (
        <Box sx={{backgroundColor:colors.lightGray,
            display: 'flex',            
            flexDirection: 'column',
            minHeight:'90%'}}>

            <Box sx={{height:'10%',
                    display: 'flex',            
                    flexDirection: 'row'}}>
                <Typography sx={{
                    width:'70%',
                    fontSize: 45,
                    marginLeft: '10%',
                    color: colors.brown,
                    fontWeight:'bold'
                }}>Список заявок</Typography>
                <Box sx={{width:'30%',
                        marginTop:'1%'}}>
                <Link to ="/Addition" style={{textDecoration:'none'}}>  
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        
                        startIcon={<AddCircleOutlineIcon />}
                        sx={{alignSelf:'center',
                            marginLeft:'20%',
                            backgroundColor: colors.yellow,
                            color:colors.white,
                            fontSize:20}}
                    >Создать</Button>
                </Link>
                </Box>
            </Box>


            <Box sx={{                 
                height:'90%', 
                width:'90%', 
                marginLeft:'5%',               
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center'}}>
                    {requests.map((request) => <Item key={request.key} props={{...request}}/>)}
                {/* {sample.map((sampleItem) => 
                    <Item key={sampleItem.id} sx={{
                        width: '30%'}}>
                    </Item>            
                )} */}
                {/* <h1 style={{fontSize:'250%'}}>Список заявок</h1> */}
            {/* <List>
                <ListItem sx={{padding:0,
                            marginTop: 2, 
                            marginBottom: 2,
                            }}>
                    <Item></Item>
                </ListItem>
                <ListItem sx={{padding:0,
                marginTop: 2, 
                marginBottom: 2,}}>
                    <Item></Item>
                </ListItem><ListItem sx={{padding:0,
                marginTop: 2, 
                marginBottom: 2,}}>
                    <Item></Item>
                </ListItem>

            </List> */}
            </Box>
        </Box>
    );}
    export default ListOfItems;
