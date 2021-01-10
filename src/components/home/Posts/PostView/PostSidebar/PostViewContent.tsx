import classes from "../PostView.module.css";
import UserClockPic from "../../../../../assets/images/clock.png";
import { comment } from "../../../../../store/storeTypes";
import { Spinner } from "react-bootstrap";
import moment from "moment";

interface PostViewContentProps {
    comments: [comment] | undefined;
    loading: Boolean;
}

const PostViewContent = (props: PostViewContentProps) => {
    let content: any = <Spinner animation="border" />;
    if (!props.loading && props.comments) {
        content = props.comments.map((comment) => (
            <div className={classes.commentBox} key={comment.commentId}>
                <div className={classes.comment} key={comment.commentId}>
                    <h3>{comment.user.name}</h3>
                    <div style={{ marginBottom: "5px" }}>
                        <span>
                            <img src={UserClockPic} alt="time" />
                            &nbsp;&nbsp;
                            {moment(+comment.createdAt).fromNow()}
                        </span>
                    </div>
                    <p>{comment.text}</p>
                </div>
            </div>
        ));
    }
    return (
        <div className={classes.postContent}>
            <div className={classes.comments}>{content}</div>
        </div>
    );
};

export default PostViewContent;
