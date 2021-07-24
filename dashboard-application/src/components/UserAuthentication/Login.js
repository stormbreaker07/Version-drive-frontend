import React, { useState } from 'react';
import classes from './Login.module.css';
import InputField from './InputField';
import {loginUtilityMethod} from '../../utility/authUtility/loginUtility';
import {useDispatch} from 'react-redux';
import {loggedIn} from '../../store/Actions';

const Login = (props) => {

    const dispatcher = useDispatch();

    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    });

    const parentSignUpData = (childData, parameter) => {

        switch (parameter) {
            case "email": {
                setloginData({
                    ...loginData,
                    email: childData
                })
                break;
            }
            case "password": {
                setloginData({
                    ...loginData,
                    password: childData
                })
                break;
            }
            default : {
                break;
            }
        }
        //console.log(loginData);
    }

    const onSuccess = (responseData) => {
        dispatcher(loggedIn());
        console.log(responseData);
    }


    const onError = (error) => {
        alert(error.response.data.message);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        loginUtilityMethod(loginData , onSuccess , onError);
    }



    const changePageHandler = (event) => {
        props.pageChanged(event.target.textContent);
    }

    return (
        <div className={classes.outerCounter}>
            <h1>LOG IN</h1>
            <form className={classes.form}>
                <InputField lebelValue="Email Id" type="email" updateDate={parentSignUpData} parameter="email" />
                <InputField lebelValue="Password" type="password" updateDate={parentSignUpData} parameter="password" />
                <button type="submit" onClick={onSubmitHandler} >SUBMIT</button>
                <div className={classes.insideDiv}>
                    <h2 onClick={changePageHandler}>SignUp</h2>
                </div>            
            </form>

        </div>
    )
}

export default Login;