import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux'
import './Auth.css';
import { Login_User, Register_User } from '../utils/GqlQueries';
import Login from '../components/auth/Login';
import Register from '../components/auth/UserRegister';
import { setToken,removeToken,checkAutoAuth } from '../store/actions/AuthActions';
import AuthSlice from '../store/slices/AuthSlice';

const Auth = (props: any) => {
    const [login] = useMutation(Login_User);
    const [register] = useMutation(Register_User);
    const [err, setErr] = useState(false);
    
    const dispatch = useDispatch();
    const authActions = AuthSlice.actions;
    
    const userAdmin = async ( email:string, password:string ) => {
        try {
            const response = await login({ variables: { email: email, password: password } });
            dispatch(
                authActions.login({
                    token: response.data.login.token,
                    user: response.data.login.user
                })
            )
            setToken(response.data.login.token);
            props.history.push("/u/home");  
        } catch (error) {
            setErr(true);
        }
    }

    const userRegisters = async ( name:string, email:string, password:string, username:string ) => {
        try {
            await register({variables:{name:name,email: email,password:password,username:username}});
            props.history.push("/login");  
        } catch (error) {
            console.log(error.message);
        }
    }

    if(props.type == "logout")
    {
        try{
            let token = checkAutoAuth();

            dispatch(
                authActions.logout({
                    token: ""
                })
            )
            removeToken(token);
            props.history.push("/login");  
        }catch(error){
            console.log(error.message);
        }
    }
    
    let render = <Login userAdmin={userAdmin} errormsg={err} />;
    if(props.type == "register") {
        render = <Register userRegisters={userRegisters} errormsg={""} />        
    }
    return render
}

export default Auth;