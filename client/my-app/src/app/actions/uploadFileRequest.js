import axios from 'axios'

export const uploadFileRequest = (request) => {
    return async () => {
        try {
            const formData = new FormData()
            formData.append("source_file", request.image)
            formData.append("image_file", request.image)

            await axios.post(`${process.env.REACT_APP_API_URL}/api/Furniture`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.error(error)
        }    
    }
}
