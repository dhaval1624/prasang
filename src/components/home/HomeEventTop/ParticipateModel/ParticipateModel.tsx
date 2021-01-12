import { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { useQuery, useMutation } from "@apollo/client";

import classes from "./ParticipateModel.module.css";
import { userParticipations, postPhoto } from "../../../../utils/GqlQueries";
import { participation } from "../../../../store/storeTypes";
import Loader from "../../../common/Loader/Loader";

interface ParticipateModelProps {
    close: () => void;
}

interface participationsResult {
    participations: [participation];
}

const ParticipateModel = (props: ParticipateModelProps) => {
    const {
        refetch,
        loading,
        error: participantError,
        data,
    } = useQuery<participationsResult>(userParticipations, {
        variables: {
            photoAdded: false,
        },
    });
    const [participations, setParticipations] = useState<[participation]>();
    const [eventId, setEventId] = useState<string>();
    const [photo, setPhoto] = useState<any>();
    const [error, setError] = useState("");

    const [
        uploadPhoto,
        { data: photoData, error: photoError, loading: photoLoading },
    ] = useMutation(postPhoto);

    useEffect(() => {
        if (data?.participations[0] && !loading && !error) {
            setEventId(data?.participations[0].event.eventId);
            setParticipations(data.participations);
        }
    }, [data, setEventId, setParticipations]);

    const photoSubmitHandler = async () => {
        if (eventId && photo) {
            try {
                await uploadPhoto({
                    variables: {
                        eventId,
                        image: photo,
                    },
                });
                await refetch();
            } catch (error) {
                setError(error.message);
            }
            setEventId("");
            setPhoto("");
            setError("");
        } else {
            setError("Please select event and photo to post.");
        }
        // props.close();
    };
    const imageChangeHandler = (e: any) => {
        const {
            target: { files },
        } = e;
        setPhoto(files[0]);
    };

    let bottomContent = <Loader />;
    if (!photoLoading) {
        bottomContent = (
            <Button
                variant="warning"
                type="submit"
                onClick={photoSubmitHandler}
                disabled={data?.participations[0] === undefined}
            >
                <FontAwesomeIcon icon={faCheck} /> Post
            </Button>
        );
    }
    let infoContent: any = "";
    if (!data?.participations[0]) {
        infoContent = (
            <Alert variant="info">
                Please participate in any event to Post photo.
            </Alert>
        );
    } else if (error) {
        infoContent = <Alert variant="danger">{error}</Alert>;
    } else if (photoData) {
        infoContent = (
            <Alert variant="success">Photo posted successfully</Alert>
        );
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.modal}>
                <div className={classes.post}>
                    <Card>
                        <Card.Header className={classes.header}>
                            <h1>Add Photo In Event</h1>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                onClick={props.close}
                            />
                        </Card.Header>
                        <Card.Body>
                            {infoContent}
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label style={{ marginBottom: "7px" }}>
                                    Event
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e) => setEventId(e.target.value)}
                                    value={eventId}
                                    disabled={photoLoading}
                                >
                                    <option disabled value="">
                                        Select an Event
                                    </option>
                                    {data?.participations[0] &&
                                        participations &&
                                        participations.map((ptc) => {
                                            return (
                                                <option
                                                    key={ptc.participationId}
                                                    value={ptc.event.eventId}
                                                >
                                                    {ptc.event.title}
                                                </option>
                                            );
                                        })}
                                </Form.Control>
                            </Form.Group>
                            <Form.File
                                id="custom-file"
                                onChange={imageChangeHandler}
                                accept="image/x-png,image/gif,image/jpeg"
                                disabled={photoLoading}
                            />
                            <div className={classes.actions}>
                                {bottomContent}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ParticipateModel;
