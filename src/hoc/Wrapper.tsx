import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux'

import { checkAutoAuth } from '../store/actions/AuthActions'
import { userProfile } from '../utils/GqlQueries'
import * as ActionTypes from '../store/actionTypes'

interface WrapperProp {
    children: any
    goToLogin: () => void
}

const Wrapper = (props: WrapperProp) => {
    const dispatch = useDispatch();
    const [ getUser, { data, loading } ] = useLazyQuery(userProfile);

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
            }
        } catch (error) {
            console.log("token not found error");
            props.goToLogin();
        }
    }, [ loading, data ])

    return props.children
}

export default Wrapper;