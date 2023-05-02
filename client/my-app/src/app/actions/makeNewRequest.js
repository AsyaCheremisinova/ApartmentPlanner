import axios from 'axios'

export const makeNewRequest = (request) => {
    return async () => {
        try {
            const formData = new FormData()
            formData.append("source_file", request.sourceFile)
            formData.append("image_file", request.image)
            formData.append("furniture_name", request.furniture.name)
            formData.append("furniture_link", request.furniture.link)
            formData.append("furniture_height", request.furniture.height)
            formData.append("furniture_width", request.furniture.width)
            formData.append("furniture_depth", request.furniture.depth)
            formData.append("category_id", request.selectedCategory)

            await axios.post(`${process.env.REACT_APP_API_URL}/api/Request`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.error(error)
        }    
    }
}
