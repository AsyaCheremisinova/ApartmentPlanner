import React from 'react';
import { Box } from '@mui/material';
import img2 from '../../assets/houses.jpg'
import { useState } from 'react';
import { DescriptionBlock } from './DescriptionBlock';
import { ParametersBlock } from './ParametersBlock';
import { FilesUploadBlock } from './FilesUploadBlock';
import { RequestSendBlock } from './RequestSendBlock';

export const RequestUploadForm = () => { 
    const [image, setImage] = useState()
    const [sourceFile, setSourceFile] = useState()

    return (
        <Box sx={{ 
            height:'90%',
            width: '100%', 
            padding: 0,           
            backgroundImage: `url(${img2})`,
            backgroundSize: "100%"
        }}> 
            <Box sx={{
                background: 'linear-gradient(to right, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            }}>
                <DescriptionBlock/>
                
                <ParametersBlock/>

                <FilesUploadBlock 
                    commands={{
                        setImage: setImage, 
                        setSourceFile: setSourceFile
                    }} 
                    data={{
                        image: image,
                        sourceFile: sourceFile
                    }}
                />

                <RequestSendBlock data={{
                    image: image,
                    sourceFile: sourceFile
                }}/>        
            </Box>
        </Box>
    )
}
               