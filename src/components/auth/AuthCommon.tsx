import Main from "../../assets/images/cm-logo.png";
import Img from "../../assets/images/cm-main-img.png";
import { Link } from "react-router-dom";

interface AuthCommonProps {
    children: any;
    type: string;
}

const AuthCommon = (props: AuthCommonProps) => {
    return (
        <div
            className="wrapper"
            style={{ background: "#e44d3a", height: "100vh" }}
        >
            <div className="sign-in-page">
                <div className="signin-popup">
                    <div className="signin-pop">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cmp-info">
                                    <div className="cm-logo">
                                        <img src={Main} alt="" />
                                        <p>
                                            Workwise, is a global freelancing
                                            platform and social networking where
                                            businesses and independent
                                            professionals connect and
                                            collaborate remotely
                                        </p>
                                    </div>
                                    <img src={Img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-sec">
                                    <ul className="sign-control">
                                        <li
                                            data-tab="tab-1"
                                            className={
                                                props.type === "login"
                                                    ? "current"
                                                    : ""
                                            }
                                        >
                                            <Link to="/login">Sign in</Link>
                                        </li>
                                        <li
                                            data-tab="tab-2"
                                            className={
                                                props.type === "register"
                                                    ? "current"
                                                    : ""
                                            }
                                        >
                                            <Link to="/register">Sign up</Link>
                                        </li>
                                    </ul>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCommon;
