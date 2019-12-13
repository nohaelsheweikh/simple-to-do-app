import React, {lazy, Suspense} from 'react';
import { Router, Route, Switch,Redirect} from "react-router-dom";
import history from "./utils/history"



const Login = lazy (() => import('./pages/Login/index'))
const Profile = lazy (() => import('./pages/Profile/Profile'))

const Main = lazy (() => import('./pages/Main/index'))



const App = () => {
   

    return (
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>     
                        <Route path = "/login"
                        render={() => (
                            localStorage.jwtToken ? (
                                 <Redirect to="/main"/>
                             ) : (
                                 <Login />
                             ) )}/>   
                        <Route path = "/main" render={() => (
                       !localStorage.jwtToken ? (
                            <Redirect to="/login"/>
                        ) : (
                            <Main />
                        ) )}/>   
                         <Route path = "/profile" render={() => (
                       !localStorage.jwtToken ? (
                            <Redirect to="/login"/>
                        ) : (
                            <Profile />
                        ) )}/>   
                    </Switch>
                </Suspense>
                <Redirect exact from="/" to="profile" />
            </Router>
    )
};

export default  App