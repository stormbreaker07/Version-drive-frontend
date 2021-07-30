import { FETCH_MY_FILES_ERROR , FETCH_MY_FILES_REQUEST, FETCH_MY_FILES_SUCCESS } from '../staticVariable';


const initialMyFileInfoState = {
    loading : false,
    data : [],
    error : ''
}

export const fetchMyFileInfoReducer = (state = initialMyFileInfoState, action) => {

    switch(action.type) {
        case FETCH_MY_FILES_REQUEST : return {
            loading : true,
            data : action.payload ,
            error : ''
        }
        case FETCH_MY_FILES_SUCCESS : return {
            loading : false,
            data : action.payload,
            error : ''
        }
        case FETCH_MY_FILES_ERROR : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }

} 