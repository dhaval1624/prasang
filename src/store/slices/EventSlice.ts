import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialEventState,event } from "../storeTypes";

const EventSlice = createSlice({
    name: "event",
    initialState: { } as initialEventState,
    reducers: {
        event: (state,action:PayloadAction<{Event:event}>)=>{
            state.eventList = [action.payload.Event]
        }
    }
});

export default EventSlice