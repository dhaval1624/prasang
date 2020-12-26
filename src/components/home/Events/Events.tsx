import React from 'react'
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from 'react-bootstrap';

import commonClasses from '../common.module.css'
import classes from './Events.module.css'

const Events = () => {
    return (
        <div className={commonClasses.wrapper}>
            <div className={commonClasses.heading}>
                <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                <h3>Tranding Events</h3>
            </div>
            <div className={commonClasses.list}>
                <div className={classes.card}>
                    <Image src="http://res.cloudinary.com/dkuoqamig/image/upload/v1608540988/cijp0mjygb6zand2pjdj.jpg" rounded className={classes.image} />
                    <div className={classes.categoryTitle}>
                        <h2>Senior Product Designer</h2>
                        <p>In <b>Traditional</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events