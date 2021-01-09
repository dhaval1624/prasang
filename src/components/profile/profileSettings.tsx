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
                            {/* <div className="nav-item nav-link" id="nav-acc-tab" style={{backgroundColor: 'inherit',color: "#e44d3a",borderColor: 'inherit'}}>Change Password</div> */}
                            {/* <a className={props.type === "changepassword" ? "nav-item nav-link Active" : ""} id="nav-acc-tab" ><i className="la la-cogs" /> */}
                                <Link to={"/u/changepassword"} className={props.type === "changepassword" ? "nav-item nav-link Active" : "Actives"} id="nav-acc-tab"  style={{color: "black"}}><i className="la la-cogs" />Change Password</Link>
                            {/* <a className={props.type === "event" ? "nav-item nav-link Active" : ""} id="nav-acc-tab"><i className="fa fa-line-chart" /> */}
                                <Link to={"/u/myevent"} className={props.type === "event" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />My Events</Link>
                                {/* </a> */}
                            {/* <a className={props.type === "myphotos" ? "nav-item nav-link Active" : ""} id="nav-acc-tab"><i className="fa fa-line-chart" /> */}
                                <Link to={"/u/myphoto"} className={props.type === "myphotos" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />My Photo</Link>
                                {/* </a> */}
                            {/* {(props.type === "logout")}     */}
                            {/* <a className={props.type === "contact" ? "nav-item nav-link Active" : ""} id="nav-acc-tab"><i className="fa fa-line-chart" /> */}
                            {/* <a className={props.type === "about" ? "nav-item nav-link Active" : ""} id="nav-acc-tab"><i className="fa fa-line-chart" /> */}
                                <Link to={"/u/about"} className={props.type === "about" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />About Us</Link>
                                {/* </a> */}
                            {/* <a className={props.type === "contact" ? "nav-item nav-link Active" : ""} id="nav-acc-tab"><i className="fa fa-line-chart" /> */}
                                <Link to={"/u/contact"} className={props.type === "contact" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />Contact Us</Link>
                                {/* </a> */}
                            {/* <a className={props.type === "logout"?"nav-item nav-link":""} style={{color: "black"}}><i className="fa fa-line-chart" />  */}
                            <Link to={"/logout"} className={props.type === "logout" ? "nav-item nav-link Active" : "Actives"} style={{color: "black"}}><i className="la la-cogs" />Logout</Link>
                            {/* </a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="tab-content" id="nav-tabContent">
                        {props.children}
                        {/* <div className="tab-pane fade active show" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                            <div className="acc-setting">
                                <h3>My Profile</h3>
                                
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-status" role="tabpanel" aria-labelledby="nav-status-tab">
                            <div className="acc-setting">
                                <h3>Change Password</h3>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfileSetting;