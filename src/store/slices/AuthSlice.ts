import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAuthState, user } from "../storeTypes";

const AuthSlice = createSlice({
    name: "auth",
    initialState: { } as initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ token:string, user:user }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        profile: (state,action:PayloadAction<{user:user,error:string}>)=>{
            state.user = action.payload.user;
            state.error = action.payload.error;
        },
        changePassword: (state,action:PayloadAction<{user:user}>)=>{
            state.user = action.payload.user;
        },
        profileError: (state,action:PayloadAction<{error:string}>)=>{
            state.error = action.payload.error;
        },
        logout: (state,action:PayloadAction<{token:string}>)=>{
            state.token = action.payload.token;
        }
    }
});

export default AuthSlice