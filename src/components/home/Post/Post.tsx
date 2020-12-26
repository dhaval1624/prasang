import React from 'react'
import { Image } from 'react-bootstrap';
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserCommentPic from '../../../assets/images/resources/bg-img4.png';
import UserCirclePic from '../../../assets/images/resources/us-pic.png';
import UserClockPic from '../../../assets/images/clock.png';

const Post = () => {
    return (
        <div className="post-bar">
            <div className="post_topbar">
                <div className="usy-dt">
                    <img src={UserCirclePic} alt="" />
                    <div className="usy-name">
                        <h3>John Doe</h3>
                        <span>
                            <img src={UserClockPic} alt="" /> 3 min ago
                        </span>
                    </div>
                </div>
            </div>

            <Image src="http://res.cloudinary.com/dkuoqamig/image/upload/v1608540988/cijp0mjygb6zand2pjdj.jpg" style={{ width: '100%', height: '450px' }} />

            <div className="job-status-bar">
                <ul className="like-com">
                    <li style={{ fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faHeart}  size="1x" /> 25
                    </li>
                    <li style={{ fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faComment}  size="1x" /> 15
                    </li>
                </ul>
            </div>
            <div className="post-comment">
                <div className="cm_img">
                    <img src={UserCommentPic} alt="" />
                </div>
                <div className="comment_box">
                    <form>
                        <input type="text" placeholder="Post a comment" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post