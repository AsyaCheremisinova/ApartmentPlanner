import axios from "axios"

export const getFile = (fileId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/File/${fileId}`, { 
                responseType: 'blob' 
            })

            return window.URL.createObjectURL(new Blob([response.data]));
            
            // // https://stackoverflow.com/questions/59274629/get-file-name-from-filestreamresult-when-using-ajax-axios
            // var contentDisposition = response.headers["content-disposition"];
            // console.log(contentDisposition)
            // var match = contentDisposition.match(/filename=(.+);/i);
            // var filename = match[1];
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', filename);
            // document.body.appendChild(link);
            // link.click();
        } catch (error) {
            console.error(error)
        }     
    }
}