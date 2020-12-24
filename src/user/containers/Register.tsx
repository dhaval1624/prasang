import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux'

import * as types from '../store/actionTypes'
import './Auth.css';
import {Register_User} from '../store/actions/actionMethod';
import UserRegister from '../components/Auth/UserRegister';

const Register = (props:any) => {
    const [register] = useMutation(Register_User);
    
    const dispatch = useDispatch();
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
    return <>
        <UserRegister userRegisters={userRegisters} errormsg={""}/>
     </>
}
export default Register;