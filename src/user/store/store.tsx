import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';
import authReducer from './reducer/authReducer';
import {IUsers,IAuth} from "./reducer/types";

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
}),
composeEnhancers(applyMiddleware(thunk)))

export default store;