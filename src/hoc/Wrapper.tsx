import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux'

import { checkAutoAuth } from '../store/actions/AuthActions'
import { userProfile } from '../utils/GqlQueries'
import AuthSlice from '../store/slices/AuthSlice';
import { store } from "../store/storeTypes";

interface WrapperProp {
    children: any
    goToLogin: () => void
    goToHome: () => void
}

const Wrapper = (props: WrapperProp) => {
    const [ getUser, { data, loading, error } ] = useLazyQuery(userProfile);
    const { goToHome, goToLogin } = props;
    const dispatch = useDispatch();
    const { login } = AuthSlice.actions;
    let storeToken = useSelector( (state:store) => state.auth.token);

    useEffect(()=> {
        try {
            if(!storeToken) {
                let token = checkAutoAuth();
                getUser();
                if(!loading && data) 
                {
                    dispatch(
                        login({
                            token: token,
                            user: data.usersProfile
                        })
                    )
                } else if(error) {
                    if(error.networkError){
                        goToHome();
                        console.log("goes to network");
                    } else {
                        console.log("goes to login");
                        goToLogin();
                    }
                }
            }
        } catch (err) {
            console.log("token not found error");
            goToLogin();
        }
    }, [ getUser, dispatch, goToLogin, goToHome, login, loading, data, error, storeToken ])

    return props.children
}

export default Wrapper;