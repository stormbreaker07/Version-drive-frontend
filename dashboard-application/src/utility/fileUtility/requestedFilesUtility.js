import {requestedFileService} from '../../services/filesServices/requestedFileService';

export const requestedFileUtility = (userId) => {
    const promise = requestedFileService(userId);
    promise.then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}