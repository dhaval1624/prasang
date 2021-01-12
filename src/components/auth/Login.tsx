import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthCommon from "./AuthCommon";

const Login = (props: any) => {
    const [auth, setAuth] = useState({
        username: "",
        password: "",
    });
    const onDataChange = (e: any, name: string) => {
        let oldData: any = { ...auth };
        oldData[name] = e.target.value;
        setAuth(oldData);
    };
    const onFinish = async (values: any) => {
        let loginData = { ...auth };
        await props.userAdmin(loginData.username, loginData.password);
    };
    return (
        <AuthCommon type="login">
            <div className="sign_in_sec current" id="tab-1">
                <h3>Sign in</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="email"
                            name="username"
                            placeholder="Enter email"
                            onChange={(e) => onDataChange(e, "username")}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <i className="la la-user" /> */}
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter password"
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
                                {/* <a href="#">Forgot Password?</a> */}
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            {/* <button type="submit" value="submit">Sign in</button> */}
                            <Button onClick={onFinish} variant="light">
                                Sign in
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </AuthCommon>
    );
};

export default Login;
