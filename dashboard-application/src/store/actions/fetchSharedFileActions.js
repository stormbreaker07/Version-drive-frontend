import { FETCH_SHARED_FILES_ERROR , FETCH_SHARED_FILES_REQUEST, FETCH_SHARED_FILES_SUCCESS , SAGA_SHARED_FILES_REQUEST} from '../staticVariable';


export const fetchSharedFileActionRequested = () => {
    return {
        type : FETCH_SHARED_FILES_REQUEST,
    }
}

export const fetchSharedFileActionSuccess = (filesInfo) => {
    return {
        type : FETCH_SHARED_FILES_SUCCESS ,
        payload : filesInfo
    }
}

export const fetchSharedFileActionError = (error) => {
    return {
        type : FETCH_SHARED_FILES_ERROR,
        payload : error
    }
}

export const sagaFetchSharedFileActionRequest = (data) => {
    return {
        type : SAGA_SHARED_FILES_REQUEST,
        payload : data
    }
}