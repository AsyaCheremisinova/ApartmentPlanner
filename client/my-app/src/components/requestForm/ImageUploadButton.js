import { ButtonBase } from "@mui/material"
import colors from "../../Themes/colors"
import { useRef } from "react"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const ImageUploadButton = ({setImage}) => {
    const inputElement = useRef()

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return(
        <div>            
            <input
                ref={inputElement}
                accept="image/*"
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
                <AddPhotoAlternateIcon sx={{
                    color: colors.white
                }}/>
            </ButtonBase>
        </div>
    )
} 