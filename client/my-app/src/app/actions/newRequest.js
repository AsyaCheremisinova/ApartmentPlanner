import axios from 'axios'

export const newRequest = (request) => {
    return async (dispatch) => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/Request`, request)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })       
    }
}

