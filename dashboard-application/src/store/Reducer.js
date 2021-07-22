import { LOGGED_IN,LOGGED_OUT , MY_FILES,SHARED_FILES,REQUESTED_FILES } from './staticVariable'; 
import { combineReducers } from "redux";


const initialLogginState = {
    status : LOGGED_OUT
}

const initialCurrentFileState = {
    location : MY_FILES
}

const logginReducer = (state=initialLogginState , action) => {

    switch(action.type) {
        case LOGGED_IN : return {
            ...state , 
            status : LOGGED_IN
        }
        case LOGGED_OUT : return {
            ...state ,
             status : LOGGED_OUT
        }
        default : return state; 
    }

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
    Auth : logginReducer,
    currentFiles : currentFilesReducer
})


