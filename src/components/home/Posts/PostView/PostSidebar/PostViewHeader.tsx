import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import classes from "../PostView.module.css";
import UserClockPic from "../../../../../assets/images/clock.png";
// import UserCirclePic from "../../../../../assets/images/resources/us-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import moment from "moment";

interface PostViewHeaderProps {
    name: string;
    userImageUrl: string;
    postTime?: string;
    comments: number;
    createdAt: number;
}

const PostViewHeader = (props: PostViewHeaderProps) => {
    return (
        <div className={classes.postTopBar}>
            <div className={classes.postTopbarUser}>
                <Image
                    style={{ height: "50px", width: "50px" }}
                    src={props.userImageUrl}
                    alt={props.name}
                />
                {/* <img src={UserCirclePic} alt="" /> */}
                <div className={classes.userName}>
                    <h3>{props.name}</h3>
                    <span>
                        <img src={UserClockPic} alt="" />
                        {moment(props.createdAt).fromNow()}
                    </span>
                </div>
            </div>
            <div className={classes.likeComments}>
                {/* <span onClick={() => toggleLike()}>
                    <FontAwesomeIcon
                        icon={like.isLiked ? faHartFilled : faHartOutlined}
                    />{" "}
                    {like.likes}
                </span> */}
                <span>
                    <FontAwesomeIcon icon={faPaperPlane} /> {props.comments}
                </span>
            </div>
        </div>
    );
};

export default PostViewHeader;
