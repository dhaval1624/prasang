import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";

import commonClasses from "../common.module.css";
import classes from "./Events.module.css";
import { useQuery } from "@apollo/client";
import { homePageEvents } from "../../../utils/GqlQueries";
import { event } from "./../../../store/storeTypes";
enum EventStatusEnum {
    Ongoing = "Ongoing",
    Ended = "Ended",
    Upcoming = "Upcoming",
    All = "All",
}
interface eventsResult {
    events: [event];
}
interface eventQueryVars {
    status: EventStatusEnum;
    categoryId?: string;
    paid?: boolean;
    limit?: number;
}

const renderEvents = (events: [event]) => {
    return events.map((event) => (
        <div className={classes.card} key={event.eventId}>
            <Image
                src={event.imageUrl}
                rounded
                className={classes.image}
                fluid
            />
            <div className={classes.categoryTitle}>
                <h2>{event.title}</h2>
                <p>
                    In <b>{event.category.name}</b>
                </p>
            </div>
        </div>
    ));
};
const renderDummyEvents = (stripeClasses: string[]) => {
    return Array(5)
        .fill(0)
        .map((_, index) => (
            <div className={classes.card} key={index}>
                <div className={classes.imageBox}>
                    <div
                        className={[
                            commonClasses.stripe,
                            commonClasses.stripeImage,
                        ].join(" ")}
                    />
                </div>
                <div className={classes.categoryTitle}>
                    <h2
                        className={[
                            ...stripeClasses,
                            commonClasses.stripeMedium,
                        ].join(" ")}
                    ></h2>
                    <p
                        className={[
                            ...stripeClasses,
                            commonClasses.stripeLong,
                        ].join(" ")}
                    ></p>
                </div>
            </div>
        ));
};

const Events = () => {
    const { loading, error, data } = useQuery<eventsResult, eventQueryVars>(
        homePageEvents,
        {
            variables: {
                status: EventStatusEnum.Ongoing,
                limit: 7,
            },
        }
    );
    let stripeClasses: string[] = [commonClasses.stripe, commonClasses.left];

    return (
        <div className={commonClasses.wrapper}>
            <div className={commonClasses.heading}>
                <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                <h3>Tranding Events</h3>
            </div>
            <div className={commonClasses.list}>
                {loading
                    ? renderDummyEvents(stripeClasses)
                    : data?.events
                    ? renderEvents(data?.events)
                    : { error }}
            </div>
        </div>
    );
};

export default Events;
