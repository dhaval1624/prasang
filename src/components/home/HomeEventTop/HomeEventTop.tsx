import React, { useState } from "react";
import classes from "./HomeEventTop.module.css";
import ParticipateModel from "./ParticipateModel/ParticipateModel";

const HomeEventTop = () => {
    const [viewParticipate, setViewParticipate] = useState(false);

    return (
        <>
            <div className="post-topbar">
                <div className="user-picy">
                    <img src="images/resources/user-pic.png" alt="" />
                </div>
                <div className="post-st">
                    <ul>
                        <li>
                            <button
                                className={classes.button}
                                onClick={() => setViewParticipate(true)}
                            >
                                Add a Photo
                            </button>
                        </li>
                        <li>
                            <button className={classes.button}>
                                Participate in Event
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {viewParticipate && (
                <ParticipateModel close={() => setViewParticipate(false)} />
            )}
        </>
    );
};

export default HomeEventTop;
