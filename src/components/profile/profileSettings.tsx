import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../containers/Auth';
// import * as classes from'./profile.module.css';
interface ProfileProps {
    children: any
    type: string
}

const ProfileSetting = (props: ProfileProps) => {

    return <>
        <div className="account-tabs-setting">
            <div className="row">
                <div className="col-lg-3">
                    <div className="acc-leftbar">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <Link to={"/u/changepassword"} className={props.type === "changepassword" ? "nav-item nav-link Active" : "Actives"} id="nav-acc-tab"  style={{color: "black"}}><i className="la la-cogs" />Change Password</Link>
                                <Link to={"/u/myevent"} className={props.type === "event" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />My Events</Link>
                                <Link to={"/u/myphoto"} className={props.type === "myphotos" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />My Photo</Link>
                                <Link to={"/u/about"} className={props.type === "about" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />About Us</Link>
                                <Link to={"/u/contact"} className={props.type === "contact" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />Contact Us</Link>
                                <Link to={"/logout"} className={props.type === "logout" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />Logout</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="tab-content" id="nav-tabContent">
                        {props.children}
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfileSetting;