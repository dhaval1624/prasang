import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux'

import * as types from '../store/actionTypes'
import './Auth.css';
import { Login_User, Register_User } from '../utils/GqlQueries';
import Login from '../components/auth/Login';
import Register from '../components/auth/UserRegister';
import { setToken } from '../store/actions/AuthActions';

const Auth = (props: any) => {
    const dispatch = useDispatch();
    const [login] = useMutation(Login_User);
    const [register] = useMutation(Register_User);
    const [err, setErr] = useState(false);
    
    const userAdmin = async (email: string, password: string) => {
        dispatch({
            type: types.INIT_USER_LOGIN
        })
        try {
            const response = await login({ variables: { email: email, password: password } });
            dispatch({
                type: types.USER_LOGIN_SUCCESS,
                user: response.data.login.user,
                token: response.data.login.token
            })
            setToken(response.data.login.token);
            props.history.push("/user/home");  
        } catch (error) {
            dispatch({
                type: types.USER_LOGIN_FAILED,
                error: error.message
            })
            setErr(true);
        }
    }

    const userRegisters = async (name:string,email : string, password : string,username:string) => {
        dispatch({
            type:types.INIT_USER_REGISTER
        })
        try {
            await register({variables:{name:name,email: email,password:password,username:username}});
            dispatch({
                type:types.USER_REGISTER_SUCCESS
            })
            props.history.push("/user/login");  
        } catch (error) {
            console.log(error.message);
            dispatch({
                type:types.USER_REGISTER_FAILED,
                error:error.message
            })
        }
    }
    
    let render = <Login userAdmin={userAdmin} errormsg={err} />;
    if(props.type == "register") {
        render = <Register userRegisters={userRegisters} errormsg={""} />        
    }
    return render
}

export default Auth;