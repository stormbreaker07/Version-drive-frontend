import React, { useState } from 'react';
import classes from './SignUp.module.css';
import InputField from './InputField';


const SignUp = (props) => {

    const [signUpData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });


    const parentSignUpData = (childData, parameter) => {

        switch (parameter) {
            case "firstName": {
                setSignUpData({
                    ...signUpData,
                    firstName: childData
                })
                break;
            }
            case "lastName": {
                setSignUpData({
                    ...signUpData,
                    lastName: childData
                })
                break;
            }
            case "email": {
                setSignUpData({
                    ...signUpData,
                    email: childData
                })
                break;
            }
            case "password": {
                setSignUpData({
                    ...signUpData,
                    password: childData
                })
                break;
            }
            default : {
                break;
            }
        }
        // console.log(signUpData);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("now submit");
    }

    const changePageHandler = (event) => {
        // console.log(event.target.textContent);
        props.pageChanged(event.target.textContent);
    }

    return (
        <div className={classes.outerCounter}>
            <h1>SIGN UP</h1>
            <form className={classes.form}>
                <InputField lebelValue="First Name" type="text" updateDate={parentSignUpData} parameter="firstName" />
                <InputField lebelValue="Last Name" type="text" updateDate={parentSignUpData} parameter="lastName" />
                <InputField lebelValue="Email Id" type="email" updateDate={parentSignUpData} parameter="email" />
                <InputField lebelValue="Password" type="password" updateDate={parentSignUpData} parameter="password" />
                <button type="submit" onClick={onSubmitHandler} >SUBMIT</button>
                <div className={classes.insideDiv}>
                    <h2 onClick={changePageHandler}>Login</h2>
                </div>            
            </form>

        </div>
    )
}

export default SignUp;