import { FETCH_MY_FILES_ERROR , FETCH_MY_FILES_REQUEST, FETCH_MY_FILES_SUCCESS , SAGA_MY_FILES_REQUEST} from '../staticVariable';


export const fetchFileActionRequested = () => {
    return {
        type : FETCH_MY_FILES_REQUEST,
    }
}

export const fetchFileActionSuccess = (filesInfo) => {
    return {
        type : FETCH_MY_FILES_SUCCESS ,
        payload : filesInfo
    }
}

export const fetchFileActionError = (error) => {
    return {
        type : FETCH_MY_FILES_ERROR,
        payload : error
    }
}

export const sagaFetchFileActionRequest = (data) => {
    return {
        type : SAGA_MY_FILES_REQUEST,
        payload : data
    }
}