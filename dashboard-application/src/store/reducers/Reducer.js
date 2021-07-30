import { MY_FILES,SHARED_FILES,REQUESTED_FILES } from '../staticVariable'; 
import { combineReducers } from "redux";
import {fetchMyFileInfoReducer} from './FetchFileInfoReducer';
import {loginReducer} from './LoginReducer';
import { fetchSharedFileInfoReducer } from './fetchSharedFilesReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialCurrentFileState = {
    location : MY_FILES
}


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['Auth']
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



export const tempRootReducer = combineReducers({
    Auth : loginReducer,
    currentFiles : currentFilesReducer,
    fetchMyFileInfo : fetchMyFileInfoReducer,
    fetchSharedFileInfo : fetchSharedFileInfoReducer
})


export const rootReducer = persistReducer(persistConfig , tempRootReducer );