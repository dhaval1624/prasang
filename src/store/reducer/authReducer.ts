import {IAuth} from './stateTypes';
import * as types from '../actionTypes';

export let initialState: IAuth = {
    userList: [],
    user:null,
    token:null,
    userId:"",
    loading:false,
    error:""
};

const store = (state=initialState,action:any) => {
    switch (action.type){
        
        case types.INIT_USER_LOGIN:
            return {
                ...state,
                loading:true
            };
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token:action.token,
                user:action.user,
                loading:false
            }
        case types.USER_LOGIN_FAILED:
            return {
                ...state,
                error:action.error,
                loading:false
            };
        case types.INIT_USER_REGISTER:
            return {
                ...state,
                error:"",
                loading:true
            };
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                error:"",
                loading:false
            }
        case types.USER_REGISTER_FAILED:
            return {
                ...state,
                error:action.error,
                loading:false
            };
        case types.PRASANG_USER_LOGIN_SUCCESS:
            return {
                ...state,
                token:action.token,
                user:action.user,
                loading:false
            }
        default:
            return state;
    }
}
export default store;
