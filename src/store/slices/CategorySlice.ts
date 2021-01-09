import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCategoryState,category } from "../storeTypes";

const CategorySlice = createSlice({
    name: "cat",
    initialState: { } as initialCategoryState,
    reducers: {
        category: (state,action:PayloadAction<{category:category}>)=>{
            state.catList = [action.payload.category]
        }
    }
});

export default CategorySlice