import axios from "axios"

export const getFileAndDownloadIt = (fileId, requestName) => {
    return async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/File/${fileId}`, { 
                responseType: 'blob' 
            })
            let filename = getFilenameFromHeader(response, requestName)
            makeDownloadClickAction(response, filename)   
        } catch (error) {
            console.error(error)
        }     
    }
}

const getFilenameFromHeader = (response, requestName) => {
    // https://stackoverflow.com/questions/59274629/get-file-name-from-filestreamresult-when-using-ajax-axios
    var contentDisposition = response.headers["content-disposition"];
    var match = contentDisposition.match(/filename=(.+);/i);
    var extensionMatch = match[1].match(/.+(\..+)/i);
    return `${requestName}${extensionMatch[1]}`;
}

const makeDownloadClickAction = (response, filename) => {
    let url =  window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}