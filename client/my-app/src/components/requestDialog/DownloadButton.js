import { ButtonBase } from "@mui/material"
import { useDispatch } from "react-redux"
import { getFileAndDownloadIt } from "../../app/actions/getFile"
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import colors from "../../Themes/colors";

export const DownloadButton = ({fileId, requestName}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getFileAndDownloadIt(fileId, requestName))
    }

    return(
        <ButtonBase onClick={handleClick} sx={{
            backgroundColor: colors.yellow,
            borderRadius: 2,
            padding: 1,
            boxShadow: 1,
            width: 50,
            height: 50,
            margin: 0.5
        }}>
            <DownloadRoundedIcon sx={{
                color: colors.white
            }}/>
        </ButtonBase>
    )
}