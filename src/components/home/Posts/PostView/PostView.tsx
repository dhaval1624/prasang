import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./PostView.module.css";
import PostImage from "./PostImage/PostImage";
import Sidebar from "./PostSidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { postt } from "../../../../store/storeTypes";
// import { ppost } from "./../PostsTypes";

interface PostViewProps {
    onClosePost: () => void;
    post: postt;
}

const PostView = (props: PostViewProps) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.postBox}>
                <div className={classes.post}>
                    <Row>
                        <Col sm={12} md={9}>
                            <PostImage imageSrc={props.post.imageUrl} />
                        </Col>
                        <Col sm={12} md={3} className={classes.sidebar}>
                            <Sidebar post={props.post} />
                        </Col>
                    </Row>
                    <span
                        className={classes.close}
                        onClick={() => props.onClosePost()}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostView;
