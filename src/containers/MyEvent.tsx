import React,{useState,useEffect} from 'react';
import MyAllEvent from '../components/profile/MyAllEvents';

import { useQuery } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../store/storeTypes';
import ParticipationSlice from '../store/slices/ParticipationSlice';
import { My_Participent_Event } from '../utils/GqlQueries';

const MyEvent = (props:any) => {
    const dispatch = useDispatch();
    const { data, refetch,loading } = useQuery(My_Participent_Event);
    const participantActions = ParticipationSlice.actions;
    const participantData = useSelector((state:store)=>state.participation.myParticipationList);
    useEffect(()=> {
        try {
            refetch()
            dispatch(
                participantActions.myParticipant({
                    Participation:data.myParticipations
                })
            )        
        } catch (error) {

        }
    },[data])
    let loader : any = "";
    if(!loading && participantData)
    {
        loader = <MyAllEvent participant = {participantData}/>;
    }
    return <> 
    {loader}
    </>
}

export default MyEvent;