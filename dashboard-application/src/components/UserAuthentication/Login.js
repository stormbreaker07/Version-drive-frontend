import React, { useState } from 'react';
import classes from './Login.module.css';
import InputField from './InputField';


const Login = (props) => {

    const [LoginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const parentSignUpData = (childData, parameter) => {

        switch (parameter) {
            case "email": {
                setLoginData({
                    ...LoginData,
                    email: childData
                })
                break;
            }
            case "password": {
                setLoginData({
                    ...LoginData,
                    password: childData
                })
                break;
            }
            default : {
                break;
            }
        }
        //console.log(LoginData);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log();
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