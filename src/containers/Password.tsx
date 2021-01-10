import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch , useSelector } from 'react-redux'
import ChangePassword from '../components/auth/ChangePassword';
import { Change_Password } from '../utils/GqlQueries'
import AuthSlice from '../store/slices/AuthSlice';
import Toast from 'react-bootstrap/Toast'
import Alert from 'react-bootstrap/Alert'
const Password = (props:any) => {
    const [newPassword] = useMutation(Change_Password);
    const [errors,setError] = useState("");
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const authActions = AuthSlice.actions;
    const changePassword = async (oldPassword:string,password:any) => {
        try {
            setError("");
            const response = await newPassword({variables:{oldPassword: oldPassword,password:password}});
            dispatch(
                authActions.changePassword({
                    user:response.data.changePassword
            }))
            if(errors === "" && response.data)
            {
                setShow(true)
            }
        } catch (error) {
          setError(error.message);
        }
    }
    const noti = <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Alert key={"change password"} variant={"success"}>
            Change Password Successfuly
        </Alert>
    </Toast>
    const render = <ChangePassword changePassword={changePassword} err = { errors } errs= { errors }/>;
    // if(props.type == "event") {
    //     // render = <MyEvent />        
    // } 
    return (<>
        {noti}
        {render}
    </>)
} 


export default Password;