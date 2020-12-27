import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'

import {IRootState} from '../store/store';
import * as types from '../store/actionTypes'

import { editProfile } from '../utils/GqlQueries';
import EditProfile from '../components/auth/EditProfile';
import './Auth.css';

const Profile = (props: any) => {
    console.log("Called");
    const dispatch = useDispatch();
    // const [profile] = useMutation(editProfile);
    const userData = useSelector((state:IRootState)=>state.auth.user);
    const [err, setErr] = useState(false);
    // const userEditProfile = async (name:string,email : string, password : string,username:string,contactNo:string,image:string) => {
    //     dispatch({
    //         type:types.INIT_USER_PROFILE
    //     })
    //     try {
    //         await profile({variables:{name:name,email: email,password:password,username:username,contactNo:contactNo,image:image}});
    //         dispatch({
    //             type:types.USER_PROFILE_SUCCESS
    //         })
    //     } catch (error) {
    //         console.log(error.message);
    //         dispatch({
    //             type:types.USER_PROFILE_FAILED,
    //             error:error.message
    //         })
    //         setErr(error.message);
    //     }
    // }
    console.log(userData);

    // let render = <EditProfile userProfile={userEditProfile} errormsg={err} />;  
    return <> <EditProfile /></>;
}

export default Profile;