import { Route, Switch } from "react-router";
import Auth from "./containers/Auth";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Landing from "./containers/Landing";
import Wrapper from "./hoc/Wrapper";
import Header from "./components/common/Header/Header";
import Password from "./containers/Password";
import Category from "./containers/Category";
// import ProfileSetting from "./components/profile/profileSettings";
import Event from "./containers/Event";
import MyEvent from "./containers/MyEvent";
import MyPhoto from "./containers/MyPhotos";
import AboutUs from "./components/profile/AboutUs";
import ContactUs from "./components/profile/ContactUs";
const Routes = (props: any) => {
    let routes = (
        <Switch>
            <Route
                path="/login"
                exact
                render={(props) => <Auth {...props} type="login" />}
            />
            <Route
                path="/register"
                exact
                render={(props) => <Auth {...props} type="register" />}
            />
            <Route
                path="/logout"
                exact
                render={(props) => <Auth {...props} type="logout" />}
            />
            <Route path="/" component={Landing} />
            {/* <Redirect to="/" /> */}
        </Switch>
    );
    if (props.location.pathname.startsWith("/u")) {
        routes = (
            <>
                <Header />
                <Switch>
                    <Wrapper
                        goToLogin={() => props.history.replace("/login")}
                        goToHome={() => props.history.replace("/")}
                    >
                        <Route path="/u/home" exact component={Home} />
                        <Route path="/u/event/" exact component={Event} />
                        <Route path="/u/profile" exact component={Profile} />
                        <Route
                            path="/u/changepassword"
                            exact
                            render={(props) => (
                                <Password {...props} type="changepassword" />
                            )}
                        />
                        <Route path="/u/category" exact component={Category} />
                        <Route path="/u/event/:id" exact component={Event} />
                        <Route
                            path="/u/myevent"
                            exact
                            render={(props) => (
                                <MyEvent {...props} type="event" />
                            )}
                        />
                        <Route
                            path="/u/myphoto"
                            exact
                            render={(props) => (
                                <MyPhoto {...props} type="myphotos" />
                            )}
                        />
                        <Route
                            path="/u/aboutus"
                            exact
                            render={(props) => (
                                <AboutUs {...props} type="about" />
                            )}
                        />
                        <Route
                            path="/u/contactus"
                            exact
                            render={(props) => (
                                <ContactUs {...props} type="contact" />
                            )}
                        />

                        {/* <Route path="/u/profile-settings" exact render={ (props) => <ProfileSettings {...props} type="changepassword" /> } /> */}
                        {/* <Route path="/u/home" /> */}
                    </Wrapper>
                </Switch>
            </>
        );
    }
    return routes;
};

export default Routes;
