import React, { useState, useEffect } from 'react';
import ProfileProps from '../profile/profileSettings';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
const myEvents = (participant:any) => {
    const myArr = [];
    const len = participant[0].length;
    if(len == 0)
    {
        myArr.push(<><div className="notifications-list" key="eve">
        <div className="notfication-details">
            No Event Participant
        </div>
    </div></>)
    }
    else
    {

        for (let i = 0; i < participant[0].length; i++) {
            myArr.push(<><div className="notifications-list" key={i}>
        <div className="notfication-details">
            <div className="noty-user-img">
                <img src={participant[0][i].event.imageUrl} alt="" />
            </div>
            <div className="notification-info">
                <h3><a href="#">{participant[0][i].event.title}</a></h3>
                <span>{"Start Date : "+moment(+participant[0][i].event.startDate).format("D/MM/yyyy")+ " , End Date : "+moment(+participant[0][i].event.endDate).format("D/MM/yyyy")}</span>
            </div>
        </div>
    </div></>)   
    }
    }
    return myArr;
}
const MyAllEvent = (props: any) => {
    
    return <>
        <ProfileProps type="event">
            <div>
                <Form>
                    <div className="acc-setting">
                        <div className="acc-setting" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                            <h3 style={{ color: "white" }}>My Event</h3>
                        </div>
                        {myEvents(props.participant)}
                    </div>
                </Form>
            </div>
        </ProfileProps>
    </>
}

export default MyAllEvent;