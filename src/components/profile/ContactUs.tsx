import React from "react";
import ProfileProps from '../profile/profileSettings';
import { Form, Row, Col } from 'react-bootstrap';
import About from '../../assets/images/contact-us.jpg';
const ContactUs = (props: any) => {
    return <>
        <ProfileProps type="contact">
            <div className="acc-setting">
                <div className="acc-setting" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                    <h3 style={{ color: "white" }}>Contact Us</h3>
                </div>
                <div className="acc-setting">
                    <img src={About} height="300px" style={{ marginTop: "10px", marginRight: "140px" }} />

                </div>
                <div className="notbar">
                    <h4>Contact Details</h4>
                    
                    <p style={{ fontSize: "16px" }}>
                        We're grateful for having you. We try our best to resolve user's problems with ease.
                        you can mail us your query at <a href="contact@prasang.com">contact@prasang.com</a> or
                        you can also contact us on toll free no +91-234567890
                    </p>
                    <div className="toggle-btn">
                        <div className="custom-control custom-switch">
                                {/* <label className="custom-control-label" ></label> */}
                    </div>
                        </div>
                    </div>
                    

                </div>
        </ProfileProps>
    </>
}

export default ContactUs;