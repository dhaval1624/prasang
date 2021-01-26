import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthCommon from "./AuthCommon";

const UserRegister = (props: any) => {
    const [auth, setAuth] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });
    const onDataChange = (e: any, name: string) => {
        let oldData: any = { ...auth };
        oldData[name] = e.target.value;
        setAuth(oldData);
    };

    const [error, setError] = useState({
        usernameError: '',
        passwordError: '',
        nameError: '',
        emailError: '',
        IsValid: true,
        IsValid2: true
    })

    useEffect(() => {
        if(props.errormsgs){
            console.log(props.errormsgs);
        }
    }, [props.errormsgs])

    // useEffect(()=>{
    //     async function myCall(){
    //         if (props.errormsgs) {
    //             if (props.errormsgs === 'Username Exists Please Select Unique') {
    //                 await setError({
    //                     ...error,
    //                     usernameError: 'Username already exists',
    //                     IsValid2: false,
    //                     IsValid:true
    //                 })
    //             }
    //             if (props.errormsgs === 'Email Exists Please Select Unique') {
    //                 await setError({
    //                     ...error,
    //                     emailError: 'Email already exists',
    //                     IsValid2: false,
    //                     IsValid:true
    //                 })
    //             }
    //             if (props.errormsgs === 'Password Must be 8') {
    //                 await setError({
    //                     ...error,
    //                     passwordError: props.errormsgs,
    //                     IsValid2: false,
    //                     IsValid:true
    //                 })
    //             }
    //         }
    //     } 
    //     myCall()   
    // },[props.errormsgs,error.IsValid,error.IsValid2])

    const onFinish = async (values: any) => {
        let registerData = { ...auth };
        let errors = { ...error, IsValid: false};
        if (!registerData.name || registerData.name === "") {
            errors.nameError = "Name Is Required "
            errors.IsValid = false;
        }
        else {
            errors.IsValid = true;
            errors.nameError = ""
        }
        if (!registerData.username || registerData.username === "") {
            errors.usernameError = "Username Is Required "
            errors.IsValid = false;
        }
        else {
            errors.IsValid = true;
            errors.usernameError = ""
        }

        if (!registerData.email || registerData.email === "") {
            errors.emailError = "Email ID Is Required "
            errors.IsValid = false;
        }
        else {
            errors.IsValid = true;
            errors.emailError = "";
        }
        
        
        if (!registerData.password || registerData.password === "") {
            errors.passwordError = "Password Is Required"
            errors.IsValid = false;
        }
        else {
            if (registerData.password.length < 8) {
                errors.passwordError = "Password Must be 8";
                errors.IsValid = false;
            }
            else{
                errors.passwordError = "";
                errors.IsValid = true;
            }
        }

        setError(errors);
        if (errors.IsValid && errors.IsValid2) {
            await props.userRegisters(
                registerData.name,
                registerData.email,
                registerData.password,
                registerData.username
            );
        }
    };
    return (
        <AuthCommon type="register">
            <div className="sign_in_sec current" id="tab-1">
                <h3>Sign up</h3>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={(e) => onDataChange(e, "name")}
                            isInvalid={(error.nameError) ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error.nameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) => onDataChange(e, "email")}
                            isInvalid={(error.emailError) ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error.emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e) => onDataChange(e, "username")}
                            isInvalid={(error.usernameError) ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error.usernameError}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => onDataChange(e, "password")}
                            isInvalid={(error.passwordError) ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error.passwordError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="row">
                        {/* <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="username" placeholder="Username" />
                                <i className="la la-user" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="password" placeholder="Password" />
                                <i className="la la-lock" />
                              </div>
                            </div> */}
                        <div className="col-lg-12 no-pdd">
                            <div className="checky-sec">
                                <div className="fgt-sec">
                                    <span>
                                        {props.errormsg ? (
                                            <h4 style={{ color: "red" }}>
                                                Wrong Username Or Password
                                            </h4>
                                        ) : null}
                                    </span>
                                </div>
                                {/* <a href="#" >Forgot Password?</a> */}
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            {/* <button type="submit" value="submit">Sign in</button> */}
                            <Button onClick={onFinish} variant="light">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </AuthCommon>
    );
};

export default UserRegister;
