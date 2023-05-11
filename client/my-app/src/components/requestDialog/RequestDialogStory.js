import { Box, Typography } from '@mui/material'
import './story.css'
import colors from '../../Themes/colors'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { RequestStatusesList } from './RequestStatusesList';

export const RequestDialogStory = () => {
    return (
        <div className="story-block">
            <Box sx={{
                width: "100%",
                height: 420,
                flexDirection: 'column',
                display: 'flex'
            }}>
                {/* Контейнер для стрелочки */}
                <Box sx={{
                    height: 21,
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <Box sx={{
                        height: "100%",
                        width: "50%",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>                        
                        <KeyboardArrowUpIcon sx={{
                            color: colors.white,
                        }}/>
                    </Box>
                </Box>
                
                <Box sx={{
                    height: 399,
                    fontWeight: 'bold',
                    display: "flex",
                    color: colors.white,
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Typography noWrap={true} sx={{
                        display: 'flex',
                        textAlign: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                        height: "10%",
                    }}>    
                        История изменений статусов
                    </Typography>

                    <RequestStatusesList/>
                </Box>
            </Box>
        </div>
    )
}

