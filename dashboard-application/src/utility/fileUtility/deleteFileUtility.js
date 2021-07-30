import {deleteFileService} from '../../services/filesServices/deleteFileService';

export const deleteFileUtility = (userId , fileId) => {

    const promise = deleteFileService(userId , fileId);
    promis.then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(response);
    })

}