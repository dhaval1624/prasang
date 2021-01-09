import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPostsState, post } from "../storeTypes";

const PostsSlice = createSlice({
    name: "posts",
    initialState: {} as initialPostsState,
    reducers: {
        posts: (state, action: PayloadAction<{ posts: [post] }>) => {
            state.posts = action.payload.posts;
        },
    },
});

export default PostsSlice;
