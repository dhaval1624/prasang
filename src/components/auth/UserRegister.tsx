import React, { useState } from "react";
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
        console.log(oldData);
        setAuth(oldData);
    };
    const onFinish = async (values: any) => {
        let registerData = { ...auth };
        await props.userRegisters(
            registerData.name,
            registerData.email,
            registerData.password,
            registerData.username
        );
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
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) => onDataChange(e, "email")}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e) => onDataChange(e, "username")}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => onDataChange(e, "password")}
                        />
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
