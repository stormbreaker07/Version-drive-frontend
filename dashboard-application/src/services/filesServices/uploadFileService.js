const axios = require('axios');


export const uploadFile = (formData) => {

    const headers = new Headers();
    headers.append('Accept' , 'text/plain;charset=UTF-8');

    return axios({
        method : 'post',
        url : 'http://localhost:8080/files/1/upload/1' ,
        data : formData,
        headers : headers
    })

}
