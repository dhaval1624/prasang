import React from "react";
import ProfileProps from '../profile/profileSettings';
import Form from 'react-bootstrap/Form';
import About from '../../assets/images/about4.png';
const AboutUs = (props: any) => {
    return <>
        <ProfileProps type="about">
            <div>
                <Form>
                    <div className="acc-setting">
                        <div className="acc-setting" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                            <h3 style={{ color: "white" }}>About Us</h3>
                        </div>
                        <div>
                            <img src={About} height="300px" style={{ marginTop: "10px",marginRight: "140px" }} />
                        </div>
                        <div className="bloktext" >
                            <span style={{marginBottom: "30px"}}>
                                <p style={{ fontSize: "18px", marginBottom: "30px" }}> <br /><br />Prasang is an online platform for social media users to get paid for their social media posts. We host paid and free events, in which users can participate, posts their photos, and can earn money if they win the event.
	                            </p>
                                <p style={{ fontSize: "18px",  }}>We take care of user's data, their privacy, and security. We use a secure way to process, and transfer money.
                                </p>
                            </span>
                        </div>
                    </div>
                </Form>
            </div>
        </ProfileProps>
    </>
}

export default AboutUs;