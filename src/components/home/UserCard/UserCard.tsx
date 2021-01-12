import React from "react";
import commonClasses from "../common.module.css";
import { user } from "../../../store/storeTypes";
import { Link } from "react-router-dom";

interface UserCardProps {
    user: user | undefined;
}

const UserCard = (props: UserCardProps) => {
    let stripes: string[] = [];
    let loading = props.user ? false : true;
    let avatarImg =
        "https://res.cloudinary.com/dkuoqamig/image/upload/v1609515874/avatar_wr7mqu.jpg";
    if (loading) {
        stripes.push(commonClasses.stripe, commonClasses.center);
    }

    return (
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img
                            src={loading ? avatarImg : props.user?.image}
                            alt={loading ? "" : props.user?.name}
                        />
                    </div>
                </div>
                <div className="user-specs">
                    <h3
                        className={[
                            ...stripes,
                            commonClasses.center,
                            commonClasses.stripeSmall,
                        ].join(" ")}
                    >
                        {loading ? "" : props.user?.name}
                    </h3>
                    {/* <span className={[...stripes, commonClasses.stripeMedium].join(" ")}>
            sadfasdf
          </span> */}
                </div>
            </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Participations</h4>
                    <span
                        className={[...stripes, commonClasses.stripeSmall].join(
                            " "
                        )}
                    >
                        {loading ? "" : props.user?.participations.length}
                    </span>
                </li>
                <li>
                    <h4>Photos</h4>
                    <span
                        className={[...stripes, commonClasses.stripeSmall].join(
                            " "
                        )}
                    >
                        {loading ? "" : props.user?.photos.length}
                    </span>
                </li>
                <li>
                    <Link
                        to={"/u/profile"}
                        style={{
                            color: "#e44d3a",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}
                    >
                        View Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UserCard;
