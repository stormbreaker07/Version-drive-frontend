import { FETCH_SHARED_FILES_ERROR , FETCH_SHARED_FILES_REQUEST, FETCH_SHARED_FILES_SUCCESS } from '../staticVariable';


const initialSharedFileInfoState = {
    loading : false,
    data : [],
    error : ''
}

export const fetchSharedFileInfoReducer = (state = initialSharedFileInfoState, action) => {

    switch(action.type) {
        case FETCH_SHARED_FILES_REQUEST : return {
            loading : true,
            data : action.payload ,
            error : ''
        }
        case FETCH_SHARED_FILES_SUCCESS : return {
            loading : false,
            data : action.payload,
            error : ''
        }
        case FETCH_SHARED_FILES_ERROR : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
} 