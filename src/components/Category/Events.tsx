import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Modal, Table } from 'react-bootstrap';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup'
import TrandingEvents from '../home/Events/Events';
import Peoples from '../home/TopViewedPeople/Peoples';
import Categories from '../home/EventsCategories/Categories';
import { BiCalendarEvent } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import { PayPalButton } from "react-paypal-button-v2";
import './Category.css';
// import Img from '../../assets/images/resources/us-pic.png';
const Events = (props: any) => {
    const [status, setStatus] = useState("");
    // const [eventParticipant,setEventParticipant] = useState(false);
    // const [show, setShow] = useState(false);
    
    const [errorParticipant, seterrorParticipant] = useState("")
    const [id, setId] = useState(0);
    const [hover, setHover] = useState(0);
    const changeData = async (e: any) => {
        setStatus(e.target.value);
        await props.status(e.target.value)
    }
    const paymentHandler = async (id: any, event: string, amt: any) => {
        const res = await props.check(id,event,amt);
        setId(id);
    }
    const hoverHandler = (id: any) => {
        setHover(id);
        seterrorParticipant("");
    }
    const data = (category: any) => {
        let catArr: any = [];
        for (let i = 0; i < category[0].length; i++) {
            const className = (hover == i) ? 'Active' : 'Actives';
            catArr.push(
                <>
                    <ListGroup.Item key={category[0][i].categoryId} className={className} onClick={() => hoverHandler(i)} as={Link} to={`/u/event/${category[0][i].categoryId}`}>
                        <BiCalendarEvent />
                        {"   " + category[0][i].name}</ListGroup.Item>
                    {/* <hr/> */}
                </>
                // <li key={i} style={{cursor:'pointer'}}  as={Link} to={`/u/event/${category[0][i].categoryId}`}>{category[0][i].name}</li>
            )
        }
        return catArr;
    }

    const eventDisplay = (event: any) => {
        let eventArr: any = [];
        if (event[0].length == 0) {
            eventArr.push(
                <div className="post-bar" key={"i"}>
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <div className="usy-name">
                                <h3>{"No Event"}</h3>
                            </div>
                        </div>
                    </div>
                </div>)
            return eventArr
        }
        else {

            for (let i = 0; i < event[0].length; i++) {
                eventArr.push(
                    <div key={"00" + event[0][i].eventId}>
                        <div className="post-bar" key={"0" + event[0][i].eventId}>
                            <div className="post_topbar">

                                <div className="usy-dt">
                                    <img src={event[0][i].category.imagePath} style={{ width: "40px", objectFit: "cover" }} alt="" />
                                    <div className="usy-name">
                                        <h3>{event[0][i].title}</h3>
                                        <span>{event[0][i].category.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="epi-sec">
                                <ul className="descp" style={{ marginLeft: "20px" }}>
                                    <li><span><MdDateRange /> StartDate : {moment(+event[0][i].startDate).format("D/MM/yyyy")}</span></li>
                                    <li><span><MdDateRange /> EndDate : {moment(+event[0][i].endDate).format("D/MM/yyyy")}</span></li>
                                    <li><span><MdDateRange /> LastRegistrationDate : {moment(+event[0][i].lastRegistraionDate).format("D/MM/yyyy")}</span></li>
                                </ul>
                                <ul className="bk-links">
                                    <li><a href="#"><i className="la la-bookmark" /></a></li>
                                    <li><a href="#"><i className="la la-envelope" /></a></li>
                                    <li><a href="#"><i className="la la-bookmark" /></a></li>
                                </ul>
                            </div>

                            <ul className="job-dt">
                                <li><a href="#" title="">Prize Money</a></li>
                                <li><span>Rs. {event[0][i].priceAmount} /- </span></li>
                            </ul>
                            <Image src={event[0][i].imageUrl} style={{ width: '100%', height: '450px', boxShadow: "2px 2px 5px" }} />

                            <div className="job_descp" style={{ paddingTop: "20px" }}>
                                <p>{event[0][i].description}</p>
                            </div>
                            {/* {event[0][i].fees != 0 ? */}
                                <div className="job-status-bar">
                                    <ul className="like-com">
                                        <li>Fees: {event[0][i].fees} </li>
                                        {/* <li style={{ marginLeft: "358px" }}> */}
                                        {/* </li> */}
                                        
                                        {(moment(+event[0][i].lastRegistraionDate)).isAfter(moment()) ?
                                        <li><Button style={{ marginLeft: "358px" }} onClick={() => paymentHandler(event[0][i].eventId, event[0][i].title, event[0][i].fees)} variant={"primary"}>Participate Event</Button> </li>
                                        :""}
                                        {/* <li><a href="#" className="com"><i className="fas fa-comment-alt" /> Participate Event</a></li> */}
                                    </ul>
                                </div> 
                            {/* {(event[0][i].eventId == id) ?
                                (errorParticipant != null || "") ?
                                    (errorParticipant == "Registration closed for event!") ?
                                        <span style={{ color: "red" }}> {errorParticipant} </span> :
                                        <span style={{ color: "green" }}> {errorParticipant} </span>
                                    : "" : ""} */}
                        </div>
                    </div>
                )
            }
            return eventArr;
        }
    }

    const eventList = (event:any) => {
        let eventArr: any = [];
        for (let i = 0; i < event[0].length; i++) {
            eventArr.push(<ListGroup.Item>{event[0][i].title}</ListGroup.Item>)
        }
        return eventArr;
    }
    return <>
        <div className="main-section-data">
            <div className="row">
                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                    {/* style={{position: "sticky top 0px"}} */}
                    <div className="main-left-sidebar no-margin" style={{position:"sticky",top:"0px"}}>

                        <div className="filter-secs" style={{ padding: "10px", boxShadow: "8px 7px 10px #888888" }}>
                            <div className="filter-heading" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                                <h3 style={{ color: "white" }}>Categories</h3>
                            </div>
                            <ul className="social_links">
                                <ListGroup variant="flush">
                                    {data(props.category)}
                                </ListGroup>

                            </ul>
                        </div>
                        <br></br>
                        {/* <Categories /> */}
                        <div className="tags-sec full-width" style={{ marginTop: "47px" }}>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Community Guidelines</a></li>
                                <li><a href="#">Cookies Policy</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Language</a></li>
                                <li><a href="#">Copyright Policy</a></li>
                            </ul>
                            <div className="cp-sec">
                                <img src="images/logo2.png" alt="" />
                                <p><img src="images/cp.png" alt="" />Copyright 2019</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="form-group" style={{ boxShadow: "1px 1px 8px #888888", float: "left", width: "100%", backgroundColor: "#fff", borderLeft: "1px solid #e4e4e4", borderRight: "1px solid #e4e4e4", borderBottom: "1px solid #e4e4e4", marginBottom: "20px", padding: "20px" }}>
                        <form>
                            <select className="form-control" name="status" onChange={(e) => changeData(e)} id="exampleFormControlSelect1" style={{ WebkitAppearance: "menulist-button" }}>
                                <option value="All">All Event</option>
                                <option value="Ongoing">LiveEvent</option>
                                <option value="Upcoming">UpcomingEvent</option>
                                <option value="Ended">PastEvent</option>
                            </select>
                        </form>
                    </div>
                    <div className="main-ws-sec">
                        <div className="posts-section" style={{ boxShadow: "1px 1px 1px" }}>
                            {eventDisplay(props.event)}
                            {/* <div className="process-comm">
                                <div className="spinner">
                                    <div className="bounce1" />
                                    <div className="bounce2" />
                                    <div className="bounce3" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 pd-right-none no-pd">
                    <div className="main-left-sidebar no-margin" style={{position:"sticky",top:"0px"}}>

                        <div className="filter-secs" style={{ padding: "10px", boxShadow: "8px 7px 10px #888888", marginBottom: "25px" }}>
                            <div className="filter-heading" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                                <h3 style={{ color: "white" }}>Popular Events</h3>
                            </div>
                            <ul className="social_links">
                                <ListGroup variant="flush">
                                    <ul className="social_links" style={{ cursor: "pointer" }}>
                                        {eventList(props.event)}
                                    </ul>
                                </ListGroup>
                            </ul>
                        </div>
                        {/* <Categories /> */}
                        <div style={{ marginTop: "50px", boxShadow: "8px 7px 10px #888888" }}>
                            <TrandingEvents />
                            <Peoples />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default Events;