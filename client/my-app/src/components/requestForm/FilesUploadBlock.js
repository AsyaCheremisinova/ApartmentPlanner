import { Box, Typography } from "@mui/material"
import { FileUploadButton } from "./FileUploadButton"
import { ImageUploadButton } from "./ImageUploadButton"

export const FilesUploadBlock = ({commands, data}) => {
    return (
        <Box sx={{
            width: "50%",
            height: "10%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
        }}>
            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                width: '30%'
            }}>
                <FileUploadButton setSourceFile={commands.setSourceFile}/>   
                <Typography noWrap={true} sx={{
                    width: 180,
                    textAlign: 'center',
                    marginX: 1,
                    height: 25,
                }}>
                    {data.sourceFile?.name !== undefined
                    ? data.sourceFile.name
                    : "Файл не выбран"}
                </Typography>
            </Box>

            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                width: '30%'
            }}>
                <ImageUploadButton setImage={commands.setImage}/>   
                <Typography noWrap={true} sx={{
                    width: 180,
                    textAlign: 'center',
                    marginX: 1,
                    height: 25,
                }}>
                    {data.image?.name !== undefined
                    ? data.image.name
                    : "Фото не выбрано"}
                </Typography>
            </Box>
        </Box>
    )
}