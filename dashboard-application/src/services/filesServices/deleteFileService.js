const axios = require('axios');

export const deleteFileService = (userId , fileId) => {

    const headers = new Headers();
    headers.append('Accept' , 'text/plain;charset=UTF-8');


    return axios({
        method : 'get',
        url : `http://localhost:8080/dashboard/${userId}/delete-file/${fileId}`,
        headers : headers
    })

}