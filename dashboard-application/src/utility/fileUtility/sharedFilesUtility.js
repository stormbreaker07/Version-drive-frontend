import {sharedFileServices } from '../../services/filesServices/sharedFileServices';

export const sharedFilesUility = (userId) => {

    const promise = sharedFileServices(userId);
    promise.then((response) => {
        console.log(response);
    })
}