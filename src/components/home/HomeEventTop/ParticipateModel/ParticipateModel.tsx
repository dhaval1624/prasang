import { useState } from "react";

import { Form, Button, Card } from "react-bootstrap";
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
    const { loading, error, data } = useQuery<participationsResult>(
        userParticipations,
        {
            variables: {
                photoAdded: false,
            },
        }
    );
    const [eventId, setEventId] = useState<string>();
    const [photo, setPhoto] = useState<any>();

    const [
        uploadPhoto,
        { data: photoData, error: photoError, loading: photoLoading },
    ] = useMutation(postPhoto);

    const photoSubmitHandler = async () => {
        await uploadPhoto({
            variables: {
                eventId,
                image: photo,
            },
        });
        setEventId("");
        setPhoto("");
        props.close();
    };
    const imageChangeHandler = (e: any) => {
        const {
            target: { files },
        } = e;
        setPhoto(files[0]);
    };

    console.log(photoData, photoError, photoLoading);

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
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label style={{ marginBottom: "7px" }}>
                                    Event
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e) => setEventId(e.target.value)}
                                    value={eventId}
                                >
                                    <option disabled value="">
                                        Select an Event
                                    </option>
                                    {!error && !loading
                                        ? data?.participations.map((ptc) => {
                                              return (
                                                  <option
                                                      key={ptc.participationId}
                                                      value={ptc.event.eventId}
                                                  >
                                                      {ptc.event.title}
                                                  </option>
                                              );
                                          })
                                        : ""}
                                </Form.Control>
                            </Form.Group>
                            <Form.File
                                id="custom-file"
                                onChange={imageChangeHandler}
                                accept="image/x-png,image/gif,image/jpeg"
                            />
                            <div className={classes.actions}>
                                {photoLoading ? (
                                    <Loader />
                                ) : (
                                    <Button
                                        variant="warning"
                                        type="submit"
                                        onClick={photoSubmitHandler}
                                    >
                                        <FontAwesomeIcon icon={faCheck} /> Post
                                    </Button>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ParticipateModel;
