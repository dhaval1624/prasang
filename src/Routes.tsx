import { Redirect, Route, Switch } from "react-router"
import Auth from "./containers/Auth"
import Home from "./containers/Home"
import Landing from "./containers/Landing"
import Wrapper from "./hoc/Wrapper"

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
        routes = (
            <Switch>
                <Wrapper goToLogin={() => props.history.replace("/login")} >
                    <Route path="/u/home" exact component={Home} />
                    {/* <Route path="/u/home" /> */}
                </Wrapper>
            </Switch>
        )
    }
    return routes
}

export default Routes