import React from "react";
import { faEquals, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import commonClasses from "../common.module.css";
import classes from "./Categories.module.css";

const Categories = () => {
    return (
        <div className={commonClasses.wrapper}>
            <div className={commonClasses.heading}>
                <FontAwesomeIcon icon={faEquals} size="1x" />
                <h3>Popular Categories</h3>
            </div>

            <div className={commonClasses.list}>
                <div className={classes.card}>
                    <div className={classes.text}>
                        <h2>Jessica William</h2>
                        <FontAwesomeIcon icon={faAngleRight} size="1x" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
