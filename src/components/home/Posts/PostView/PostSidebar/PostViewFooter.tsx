import React, { useState } from "react";
import classes from "../PostView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputGroup } from "react-bootstrap";

interface footerProps {
    submitComment: (text: string) => void;
    loading: boolean | undefined;
    error: string | undefined;
}
enum commentStatus {
    POSTED,
    INVALID,
    EMPTY,
}

const PostViewFooter = (props: footerProps) => {
    const [text, setText] = useState("");
    const [status, setStatus] = useState<commentStatus>(commentStatus.EMPTY);

    const submitComment = () => {
        if (text === "") {
            setStatus(commentStatus.INVALID);
        } else {
            props.submitComment(text);
            setText("");
            setStatus(commentStatus.POSTED);
        }
    };

    return (
        <div className={classes.postBottomBar}>
            <div className={classes.cmBox}>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Post a comment"
                        required
                        isInvalid={
                            status === commentStatus.INVALID ||
                            props.error !== undefined
                        }
                        isValid={status === commentStatus.POSTED}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <InputGroup.Prepend>
                        <button
                            type="submit"
                            className={classes.cmButton}
                            onClick={submitComment}
                            disabled={props.loading}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </InputGroup.Prepend>
                    <FormControl.Feedback type="valid">
                        Comment posted.
                    </FormControl.Feedback>
                    <FormControl.Feedback type="invalid">
                        {props.error
                            ? props.error
                            : "Comment text is required."}
                    </FormControl.Feedback>
                </InputGroup>
            </div>
        </div>
    );
};

export default PostViewFooter;
