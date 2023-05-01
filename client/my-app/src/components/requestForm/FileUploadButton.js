import { ButtonBase, Typography } from "@mui/material"
import colors from "../../Themes/colors"
import { useRef } from "react"

export const FileUploadButton = () => {
    const inputElement = useRef()
    const handleFileChange = (e) => {
        
    }

    return(
        <div>            
            <input
                ref={inputElement}
                type="file"
                hidden
            />
            <ButtonBase onClick={() => 
                inputElement.current.click()
            } sx={{
                backgroundColor: colors.yellow,
                borderRadius: 2,
                paddingY: 1,
                boxShadow: 1,
                width: 200
            }}>
                <Typography sx={{
                    color: colors.white,
                    fontSize: 16,
                }}>
                    ПРИКРЕПИТЬ ФАЙЛ
                </Typography>
            </ButtonBase>
        </div>
    )
} 