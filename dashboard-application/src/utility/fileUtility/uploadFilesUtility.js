import {uploadFile} from '../../services/filesServices/uploadFileService';

export const uploadFileUtility = (formData) => {

    const promise = uploadFile(formData);
    promise.then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data.message);
    })
} 