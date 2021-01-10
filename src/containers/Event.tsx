import React,{useState,useEffect} from 'react';

import { useQuery,useMutation } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../store/storeTypes';
import CategorySlice from '../store/slices/CategorySlice';
import EventSlice from '../store/slices/EventSlice';
import ParticipationSlice from '../store/slices/ParticipationSlice';
import { FetchCategory,FetchEvent,user_participate,My_Participent_Event_Check } from '../utils/GqlQueries';
import Card from 'react-bootstrap/Card'
import Events from '../components/Category/Events';
const Event = (props:any) => {
    const dispatch = useDispatch();
    const { data, refetch,loading } = useQuery(FetchCategory);
    const catActions = CategorySlice.actions;
    const eventActions = EventSlice.actions;
    const participationActions = ParticipationSlice.actions;
    const catData = useSelector((state:store)=>state.category.catList);
    const eventData = useSelector((state:store)=>state.event.eventList);
    const [categoryError, setcategoryError] = useState("");
    const [participantError, setparticipantError] = useState("");
    const [eventStatus, setEventstatus] = useState("All");
    const [myParticipant] = useMutation(user_participate);

    const [eventspart] = useMutation(My_Participent_Event_Check);
    
    const status = async (status:string) => {
        setEventstatus(status)
    }
    const { data:events } = useQuery(FetchEvent,{
        variables:{
            categoryId:props.match.params.id,
            status:eventStatus
        }
    });
    useEffect(()=> {
        try {
            dispatch(
                catActions.category({
                  category:data.eventCategories  
                })
            )        
        } catch (error) {
            setcategoryError(error.message)
        }
        try {
            dispatch(
                eventActions.event({
                    Event:events.events
                })
            )        
        } catch (error) {
            setcategoryError(error.message)
        }
    },[data,events])
    
    const amt = async (eventId:string) => {
        try{
            const response = await myParticipant({variables:{eventId: eventId}});
            dispatch(
                participationActions.participant({
                    Participation:response.data
                })
            )
        }catch(error){
            // setparticipantError(error.message);
            // console.log(error.message)
        }
    }
    const check = async (eventId:string) => {
        try{
            console.log(eventId)
            const response=await eventspart({variables:{eventId: eventId}});
            if(response.data.participateCheck == null)
                setparticipantError(response.data.participateCheck);
            // console.log(response.data.participateCheck);
        }catch(error){
            // console.log(error)
            setparticipantError(error.message);
        }
    }
    let loader : any = "";
    if(!loading && catData && eventData)
    {
        loader = <Events category = {catData} event = {eventData} status={status} amt={amt} check = {check} errpart = {participantError}/>;
    }
    return <>
        <Card>
            <Card.Body style={{backgroundColor:"#f2f2f2"}}>
                {loader}
            </Card.Body>
        </Card>
    </>
}

export default Event;