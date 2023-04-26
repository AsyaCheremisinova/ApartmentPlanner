import axios from 'axios'

export const updateRequest = (request) => {
    console.log(request)
    return async (dispatch) => {
        axios.put(`${process.env.REACT_APP_API_URL}/api/Request/${request.id}`, request)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })       
    }
}

