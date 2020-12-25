import {IUsers} from './stateTypes';
import * as types from '../actionTypes';

export let initialState: IUsers = {
    userList:[],
    error:"",
    loading:false
};

const store = (state=initialState,action:any) => {
    switch (action.type){
        case types.INIT_DATA:
            return {
                ...state,
            };
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                userList:action.myData
            }
        case types.FETCH_DATA_FAILED:
            return {
                ...state,
                error:action.error
            };
        default:
            return state;
    }
}
export default store;
