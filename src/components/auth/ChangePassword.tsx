import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfileProps from '../profile/profileSettings';
const ChangePassword = (props: any) => {
    const [password, setPassword] = useState({
        password: '',
        oldPassword: '',
        confirmPassword: ''
    })
    const [error, seterror] = useState({
        password: '',
        oldPassword: '',
        confirmPassword: '',
        IsValid: true
    })
    useEffect(() => {
        if (props.errs) {
            if (props.errs == 'Old Password is Not Match') {
                seterror({
                    ...error,
                    oldPassword: "Old Password is Not Match",
                    IsValid: false
                })
            }
            if (props.errs == 'Password Must be 8') {
                seterror({
                    ...error,
                    confirmPassword: "Password Must be 8",
                    IsValid: false
                })
            }
        }
    }, [props.errs, error.IsValid])
    const onDataChange = (e: any, name: string) => {

        let oldData: any = { ...password }
        oldData[name] = e.target.value;
        setPassword(oldData);
    }
    const onFinish = async (values: any) => {
        let passwords = { ...password }
        let errors = { ...error, IsValid: false };
        if (!passwords.oldPassword || passwords.oldPassword === "") {
            errors.oldPassword = "Old Password Is Required"
        } else {
            errors.IsValid = true;
            errors.oldPassword = ""
        }
        if (!password.password || passwords.password === "") {
            errors.password = "New Password Is Required"
        } else {
            errors.IsValid = true;
            errors.password = ""
        }
        if (!password.confirmPassword || passwords.confirmPassword === "") {
            errors.confirmPassword = "Confirm Password Is Required"
        }
        else {
            errors.IsValid = true;
            errors.confirmPassword = ""
        }
        if (password.password.length > 0 && password.confirmPassword.length > 0) {
            if (password.password !== password.confirmPassword) {
                errors.IsValid = false;
                errors.confirmPassword = "New Password and Confirm Password Not Matched"
            }
            else {
                errors.IsValid = true;
                errors.confirmPassword = "";
            }
        }
        seterror(errors);
        if (errors.IsValid) {
            await props.changePassword(passwords.oldPassword, passwords.password);
        }

    };
    return (<>
        <ProfileProps type="changepassword">

            <div className="acc-setting">
                <h3>Change Password</h3>
                <Form>
                    {/* <div className="cp-field">
            <h5>Old Password</h5>
            <div className="cpp-fiel">
                <input type="password" name="oldPassword" placeholder="Old Password" onChange={(e) => onDataChange(e,'oldPassword')}/>
            </div>
            </div> */}
                    <Form.Group className="cp-field" controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Old Password</Form.Label>
                        <Form.Control isInvalid={(error.oldPassword) ? true : false} className="cpp-fiel" type="password" name="oldPassword" onChange={(e) => onDataChange(e, 'oldPassword')} />
                        <Form.Control.Feedback type="invalid">
                            {error.oldPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="cp-field" controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>New Password</Form.Label>
                        <Form.Control isInvalid={(error.password) ? true : false} className="cpp-fiel" type="password" name="password" onChange={(e) => onDataChange(e, 'password')} />
                        <Form.Control.Feedback type="invalid">
                            {error.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="cp-field" controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Confirm Password</Form.Label>
                        <Form.Control isInvalid={(error.confirmPassword) ? true : false} className="cpp-fiel" type="password" name="confirmPassword" onChange={(e) => onDataChange(e, 'confirmPassword')} />
                        <Form.Control.Feedback type="invalid">
                            {error.confirmPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="save-stngs pd2">
                        <ul>
                            <li>
                                <Button variant="primary" onClick={onFinish}>
                                    Submit
                                </Button>
                            </li>
                        </ul>
                    </div>
                </Form>
            </div>
        </ProfileProps>

    </>)
}


export default ChangePassword;