import { MY_FILES,SHARED_FILES,REQUESTED_FILES } from '../staticVariable'; 
import { combineReducers } from "redux";
import {fetchMyFileInfoReducer} from './FetchFileInfoReducer';
import {loginReducer} from './LoginReducer';
import { fetchSharedFileInfoReducer } from './fetchSharedFilesReducer';

const initialCurrentFileState = {
    location : MY_FILES
}







const currentFilesReducer = (state = initialCurrentFileState ,action) => {

    switch(action.type) {
        case MY_FILES : return {
            ...state , 
            location : MY_FILES
        }
        case SHARED_FILES : return {
            ...state , 
            location : SHARED_FILES
        }
        case REQUESTED_FILES : return {
            ...state , 
            location : REQUESTED_FILES
        }
        default : return state;
    }
}



export const rootReducer = combineReducers({
    Auth : loginReducer,
    currentFiles : currentFilesReducer,
    fetchMyFileInfo : fetchMyFileInfoReducer,
    fetchSharedFileInfo : fetchSharedFileInfoReducer
})


