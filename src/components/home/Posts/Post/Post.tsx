import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { faHeart as faHartFilled } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHartOutlined } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { postt } from "./../../../../store/storeTypes";
import UserClockPic from "../../../../assets/images/clock.png";
import classes from "./Post.module.css";
import moment from "moment";

interface PostProps {
    post: postt;
    onPostSelect: (post: postt) => void;
    likePhotoHandler: (photoId: string) => void;
}

const Post = (props: PostProps) => {
    const [like, setLike] = useState({
        likes: 0,
        isLiked: false,
    });

    useEffect(() => {
        setLike({
            likes: props.post.likes,
            isLiked: props.post.isLiked,
        });
    }, [props.post.likes, props.post.isLiked]);

    const toggleLike = () => {
        let newLike = { ...like };
        if (like.isLiked) {
            newLike = {
                isLiked: false,
                likes: like.likes - 1,
            };
        } else {
            newLike = {
                isLiked: true,
                likes: like.likes + 1,
            };
        }
        setLike(newLike);
        props.likePhotoHandler(props.post.photoId);
    };

    return (
        <div className={classes.postBar}>
            <div className={classes.postTopBar}>
                <Row>
                    <Col sm={6}>
                        <div className={classes.postTopbarUser}>
                            <Image
                                style={{ height: "50px", width: "50px" }}
                                src={props.post.user.image}
                                alt={props.post.user.name}
                            />
                            <div className={classes.userName}>
                                <h3>{props.post.user.name}</h3>
                                <span>
                                    <img src={UserClockPic} alt="" />
                                    &nbsp;&nbsp;
                                    {moment(+props.post.createdAt).fromNow()}
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col
                        sm={6}
                        style={{
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center",
                            fontSize: "25px",
                        }}
                        onClick={toggleLike}
                    >
                        {like.likes}&nbsp;
                        <FontAwesomeIcon
                            icon={like.isLiked ? faHartFilled : faHartOutlined}
                            size="1x"
                        />
                    </Col>
                </Row>
            </div>

            <Image
                src={props.post.imageUrl}
                className={classes.image}
                onClick={() => props.onPostSelect(props.post)}
            />

            {/* <div className={classes.jobStatusBar}>
                <ul className={classes.likeCom}>
                    <li onClick={toggleLike}>
                        <FontAwesomeIcon
                            icon={like.isLiked ? faHartFilled : faHartOutlined}
                            size="1x"
                        />{" "}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPaperPlane} size="1x" />{" "}
                        {props.post.comments.length}
                    </li>
                </ul>
            </div> */}
            {/* <div className={classes.postComment}>
                <div className={classes.cmImage}>
                    <img src={UserCommentPic} alt="" />
                </div>
                <div className={classes.cmBox}>
                    <input
                        type="text"
                        placeholder="Post a comment"
                        className={classes.cmInput}
                    />
                    <button type="submit" className={classes.cmButton}>
                        Send
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Post;
