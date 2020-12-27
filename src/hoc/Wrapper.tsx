import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux'

import { checkAutoAuth } from '../store/actions/AuthActions'
import { userProfile } from '../utils/GqlQueries'
import * as ActionTypes from '../store/actionTypes'

interface WrapperProp {
    children: any
    goToLogin: () => void
    goToHome: () => void
}

const Wrapper = (props: WrapperProp) => {
    const dispatch = useDispatch();
    const [ getUser, { data, loading, error } ] = useLazyQuery(userProfile);

    useEffect(()=> {
        try {
            let token = checkAutoAuth();
            getUser();
            if(!loading && data) 
            {
                dispatch({
                    type:ActionTypes.PRASANG_USER_LOGIN_SUCCESS,
                    user:data.usersProfile,
                    token: token
                });
            } else if(error) {
                console.log(error);
                if(error.networkError){
                    dispatch({
                        type: ActionTypes.USER_LOGIN_FAILED,
                        error: error.networkError
                    });
                    props.goToHome();
                    console.log("goes to network");
                } else {
                    console.log("goes to login");
                    props.goToLogin();
                }
            }
        } catch (err) {
            console.log("token not found error");
            console.log(err)
            props.goToLogin();
        }
    }, [ loading, data, error ])

    return props.children
}

export default Wrapper;