import React,{useState,useEffect} from 'react';

import { useQuery,useMutation } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../store/storeTypes';
import CategorySlice from '../store/slices/CategorySlice';
import EventSlice from '../store/slices/EventSlice';
import ParticipationSlice from '../store/slices/ParticipationSlice';
import { FetchCategory,FetchEvent,user_participate,My_Participent_Event_Check } from '../utils/GqlQueries';
import { Card,Alert,Modal,Button,Table } from 'react-bootstrap'
import Events from '../components/Category/Events';
import { PayPalButton } from "react-paypal-button-v2";
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

    const [eventspart,{error:eventsError,loading:eventLoading,data:eventPData}] = useMutation(My_Participent_Event_Check);
    const [show, setShow] = useState(false);
    const handleClose = () => {  
        setShow(false); 
    }
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
        }
    }
    const [amtParticipant, setAmtParticipant] = useState({
        amt1: "",
        event: "",
        eventId:""
    });
    const check = async (eventId:string,event:string,amount:string) => {
        setparticipantError("");
        try{
            setAmtParticipant({
                amt1:amount,
                event:event,
                eventId:eventId
            })
            const response=await eventspart({variables:{eventId: eventId}});
            setShow(true);
        }catch(error){
            setparticipantError(error.message);
        }
    }
    const paymentSuccess = async () => {
        setShow(false);
        try{
            const response = await myParticipant({variables:{eventId: amtParticipant.eventId}});
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
    let er1 : any = "";
    if(eventPData){
        console.log("");
    }   
    else if(eventsError){
        er1 = <Alert key="Alert" variant="danger">
            {eventsError.message}
        </Alert>
        console.log(eventsError.message);
    }
    else if(!eventsError){
        er1 = "";
    }
    let loader : any = "";
    if(!loading && catData && eventData)
    {
        loader = <Events category = {catData} event = {eventData} status={status} amt={amt} check = {check} er={er1} errpart = {participantError}/>;
    }
    return <>
        <Card>
            <Card.Body style={{backgroundColor:"#f2f2f2"}}>
                {er1}
                {loader}
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {"You Can Participant  "}
                                <b>{amtParticipant.event}</b>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        In Just Rs. {amtParticipant.amt1} /-
                            </td>

                                </tr>
                            </td>

                        </tr>

                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <PayPalButton
                    amount={amtParticipant.amt1}
                    onSuccess={(details: any, data: any) => {
                        alert("Transaction completed by " + details.payer.name.given_name);
                        paymentSuccess();
                        // return props.amt(id);
                        // OPTIONAL: Call your server to save the transaction
                        // return fetch("/paypal-transaction-complete", {
                        //     method: "post",
                        //     body: JSON.stringify({
                        //     orderID: data.orderID
                        //     })
                        // });
                    }
                    }
                />
                <Button variant="secondary" style={{ background: "#e44d3a" }} onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default Event;