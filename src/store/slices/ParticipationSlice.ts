import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialParticipationState,participation } from "../storeTypes";

const ParticipationSlice = createSlice({
    name: "participation",
    initialState: { } as initialParticipationState,
    reducers: {
        participant: (state,action:PayloadAction<{Participation:participation}>) => {
            state.participationList = [action.payload.Participation]
        },
        myParticipant: (state,action:PayloadAction<{Participation:participation}>) => {
            state.myParticipationList = [action.payload.Participation]
        }
    }
});

export default ParticipationSlice