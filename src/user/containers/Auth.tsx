import React,{useState} from 'react';
import { gql, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux'

import * as types from '../store/actionTypes'
import './Auth.css';
import {Login_User} from '../store/actions/actionMethod';
import Login from '../components/Auth/Login';

const Auth = (props : any) => {
  const [login] = useMutation(Login_User);
  const [err,setErr] = useState(false);
  const dispatch = useDispatch();
  const userAdmin = async (email : string, password : string) => {
    dispatch({
      type:types.INIT_USER_LOGIN
  })
  try {
      const response = await login({variables:{email: email,password:password}});
      dispatch({
          type:types.USER_LOGIN_SUCCESS,
          user:response.data.login.user,
          token:response.data.login.token
      })
      localStorage.setItem("userToken", response.data.login.token);
      props.history.push("/user/home");  
  } catch (error) {
      dispatch({
          type:types.USER_LOGIN_FAILED,
          error:error.message
      })
      setErr(true);
  }
  }
return ( <> <Login userAdmin={userAdmin} errormsg={err}/> </>)
}

export default Auth;