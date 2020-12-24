import React,{useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { useQuery } from '@apollo/client';

import Home from './containers/Home';
import Auth from './containers/Auth';
import Register from './containers/Register';
import { userProfile } from './store/actions/actionMethod';
import {IRootState} from './store/store';
import * as types from './store/actionTypes'
import Header from './components/common/Header';
const UserMain = ( props:any ) => {
    const dispatch = useDispatch();
    const { data, refetch,loading } = useQuery(userProfile);
    const { location } = props;
    const token = useSelector((state:IRootState) => state.auth.token ? true : false)

    useEffect(()=> {
        let tokens = localStorage.getItem("userToken");
        console.log(token);
        if(props.location.pathname.startsWith("/user") && !token) {
            refetch()
            console.log(data);
            if(!loading && data) 
            {
                dispatch({
                    type:types.PRASANG_USER_LOGIN_SUCCESS,
                    user:data.usersProfile,
                    token:tokens
                })
            }
        }
    }, [location.pathname,token,data])

    let renders : any = <Redirect to="/user" />;
    if(props.location.pathname.startsWith("/user") && !token)
    {
        renders = <Switch>
            <Route path="/user/login" exact component={Auth}/>
            <Route path="/user/register" exact component={Register}/>
            <Redirect to="/user/login" />
        </Switch>
    }
    else if(props.location.pathname.startsWith("/user") && token)
    {
        
        renders =<> <Header/> <Switch>
        <Route path="/user/home" exact component={Home}/>
        <Redirect to="/user/home" />
        </Switch> </>
    }
    return renders;
}

export default UserMain;