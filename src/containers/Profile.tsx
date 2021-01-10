import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'

import { store } from '../store/storeTypes';
import AuthSlice from '../store/slices/AuthSlice';
import { editProfile } from '../utils/GqlQueries';
import EditProfile from '../components/auth/EditProfile';
import Toast from 'react-bootstrap/Toast'
import Alert from 'react-bootstrap/Alert'
import './Auth.css';

const Profile = (props: any) => {
    const dispatch = useDispatch();
    const [profile] = useMutation(editProfile);
    const authActions = AuthSlice.actions;
    const [profileError, setProfileError] = useState("");
    const userData = useSelector((state:store)=>state.auth.user);
    const [show, setShow] = useState(false);
    
    const userEditProfile = async (name:string,email : string, password : string,username:string,contactNo:string,image:any|string) => {
        // setProfileError("");
        try {
            let response : any = "";
            if(typeof image === 'string')
            {
                if(image.includes("http"))
                {
                    response = await profile({variables:{name:name,email: email,password:password,username:username,contactNo:contactNo}});
                }
            }    
            else
            {
                response = await profile({variables:{name:name,email: email,password:password,username:username,contactNo:contactNo,image:image}});
            }
            setProfileError("");
            
            // dispatch(
            //     authActions.profileError({
            //     error: ""
            // }))
            dispatch(
                authActions.profile({
                user: response.data.editProfile,
                error: ""
            }) )
            setProfileError("");
    
            if(profileError === "" && response.data)
            {
                setShow(true)
            }
        } catch (error) {
            console.log(error.message);
            setProfileError(error.message);
        }
    }
    const error = useSelector((state:store)=>state.auth.error);
    let data : any = ""

    if(profileError.length > 0)
    {
        data = <EditProfile userEdit = {userEditProfile} errormsg={profileError}/>
    }
    else{
        data = <EditProfile userProfile={userData} userEdit = {userEditProfile} errormsg={profileError}/>
    }
    const noti = <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Alert key={"Profile Updated"} variant={"success"}>
            Profile Updated Successfuly
        </Alert>
    </Toast> 
    
    return <> {noti} { data }</>;
}

export default Profile;