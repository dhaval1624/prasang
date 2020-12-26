import React from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from 'react-bootstrap';

import commonClasses from '../common.module.css'
import classes from './Peoples.module.css'

const Peoples = () => {
    return (
        <div className={commonClasses.wrapper}>
            <div className={commonClasses.heading}>
                <FontAwesomeIcon icon={faUser} size="1x" />
                <h3>Most Viewed People</h3>
            </div>
            <div className={commonClasses.list}>
                <div className={classes.card}>
                    <Image src="http://res.cloudinary.com/dkuoqamig/image/upload/v1608540988/cijp0mjygb6zand2pjdj.jpg" roundedCircle alt="" />
                    <div className={classes.text}>
                        <h2>Jessica William</h2>
                        <span>Graphic Designer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Peoples