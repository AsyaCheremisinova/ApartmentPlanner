import { ButtonBase } from "@mui/material"
import colors from "../../Themes/colors"
import { useRef } from "react"
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const FileUploadButton = ({setSourceFile}) => {
    const inputElement = useRef()

    const handleFileChange = (e) => {
        setSourceFile(e.target.files[0])
    }

    return(
        <div>            
            <input
                ref={inputElement}
                type="file"
                hidden
                onChange={handleFileChange}
            />
            <ButtonBase onClick={() => 
                inputElement.current.click()
            } sx={{
                backgroundColor: colors.yellow,
                borderRadius: 2,
                padding: 1,
                boxShadow: 1,
                width: 50,
                height: 50
            }}>
                <UploadFileIcon sx={{
                    color: colors.white
                }}/>
            </ButtonBase>
        </div>
    )
} 