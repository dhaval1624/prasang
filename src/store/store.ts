import { createStore, combineReducers, compose } from 'redux';
import userReducer from './reducer/userReducer';
import authReducer from './reducer/authReducer';
import {IUsers,IAuth} from "./reducer/stateTypes";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IRootState {
    user: IUsers
    auth: IAuth
}
const store =createStore(combineReducers({
    user:userReducer,
    auth:authReducer,
}), composeEnhancers());

export default store;