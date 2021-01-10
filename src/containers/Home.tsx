import React, { useState } from "react";
import "./main";

// import userImage from "../assets/images/resources/s1.png";
import UserCard from "../components/home/UserCard/UserCard";
import Posts from "../components/home/Posts/Posts";
import HomeEventTop from "../components/home/HomeEventTop/HomeEventTop";
import TrandingEvents from "../components/home/Events/Events";
import Peoples from "../components/home/TopViewedPeople/Peoples";
import Categories from "../components/home/EventsCategories/Categories";
import { useSelector } from "react-redux";
import { store } from "../store/storeTypes";

const Home = () => {
    const user = useSelector((state: store) => state.auth.user);

    return (
        <>
            <div className="wrapper">
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">
                                            {/* User Profile */}
                                            <UserCard user={user} />

                                            {/* Categories */}
                                            <Categories />

                                            {/* Links */}
                                            {/* <div className="tags-sec full-width">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            Help Center
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Community Guidelines
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Cookies Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Career</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Language</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Copyright Policy
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="cp-sec">
                                                    <img
                                                        src="images/logo2.png"
                                                        alt=""
                                                    />
                                                    <p>
                                                        <img
                                                            src="images/cp.png"
                                                            alt=""
                                                        />
                                                        Copyright 2019
                                                    </p>
                                                </div>
                                            </div>
                                         */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="main-ws-sec">
                                            <HomeEventTop />
                                            <Posts />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 pd-right-none no-pd">
                                        <div className="right-sidebar">
                                            <div className="widget widget-about">
                                                <img
                                                    src="images/wd-logo.png"
                                                    alt=""
                                                />
                                                <h3>Track Time on Workwise</h3>
                                                <span>
                                                    Pay only for the Hours
                                                    worked
                                                </span>
                                                <div className="sign_link">
                                                    <h3>
                                                        <a href="sign-in.html">
                                                            Sign up
                                                        </a>
                                                    </h3>
                                                    {/* <a href="#">Learn More</a> */}
                                                </div>
                                            </div>

                                            <TrandingEvents />
                                            <Peoples />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;
