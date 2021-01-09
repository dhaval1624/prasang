import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPhotoState,photo } from "../storeTypes";

const PhotoSlice = createSlice({
    name: "photo",
    initialState: { } as initialPhotoState,
    reducers: {
        photo: (state,action:PayloadAction<{Photo:photo}>) => {
            state.photoList = [action.payload.Photo]
        }
    }
});

export default PhotoSlice