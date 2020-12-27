import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './slices/AuthSlice'

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    }
});

export default store;