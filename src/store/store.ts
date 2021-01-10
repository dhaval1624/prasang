import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './slices/AuthSlice'
import CategorySlice from './slices/CategorySlice'
import EventSlice from "./slices/EventSlice";
import PhotoSlice from "./slices/PhotoSlice";
import ParticipationSlice from "./slices/ParticipationSlice";


const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        category: CategorySlice.reducer,
        event:EventSlice.reducer,
        participation:ParticipationSlice.reducer,
        photo:PhotoSlice.reducer
    }
});

export default store;