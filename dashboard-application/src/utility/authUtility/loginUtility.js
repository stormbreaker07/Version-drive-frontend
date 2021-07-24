import {verifyLoginData } from '../../services/authServices/loginService';


export const loginUtilityMethod = (loginData , onSuccess , onError) => {
    const response = verifyLoginData(loginData);
    response.then((responseData) => {
       onSuccess(responseData);
    }).catch((err) => {
        onError(err);
    })
}

