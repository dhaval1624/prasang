import { Route, Switch } from "react-router"
import Auth from "./containers/Auth"
import Home from "./containers/Home"
import Profile from './containers/Profile';
import Landing from "./containers/Landing"
import Wrapper from "./hoc/Wrapper"
import Header from './components/common/Header/Header';
const Routes = (props:any) => {
    let routes = (
        <Switch>
            <Route path="/login" exact render={ (props) => <Auth {...props} type="login" /> } />
            <Route path="/register" exact render={ (props) => <Auth {...props} type="register" /> } />
            <Route path="/" component={Landing} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )
    if(props.location.pathname.startsWith("/u")) {
        routes = 
        (
            <>
            <Header/>
            <Switch>
                <Wrapper goToLogin={() => props.history.replace("/login")} goToHome={ () => props.history.replace("/") } >
                    <Route path="/u/home" exact component={Home} />
                    <Route path="/u/profile" exact component={Profile} />
                    {/* <Route path="/u/home" /> */}
                </Wrapper>
            </Switch>
            </>
        )
    }
    return routes
}

export default Routes