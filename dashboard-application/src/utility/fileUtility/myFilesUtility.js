import {myFileServices} from '../../services/filesServices/myFilesService';

export const myFileUtility = (userId , changeFileState) => {

    const myFilePromise = myFileServices(userId);

    myFilePromise.then((responseData) => {
        console.log(responseData);
    })
    .catch((error) => {
        console.log(error.response.data.message);
    })
}