import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAuthState, user } from "../storeTypes";

const AuthSlice = createSlice({
    name: "auth",
    initialState: { } as initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ token:string, user:user }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        }
    }
});

export default AuthSlice