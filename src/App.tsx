import React, {lazy, Suspense} from 'react';
import { Router, Route, Switch,Redirect} from "react-router-dom";
import history from "./utils/history"



const Login = lazy (() => import('./pages/Login/index'))
const Profile = lazy (() => import('./pages/Profile/Profile'))
const Main = lazy (() => import('./pages/Main/TasksList'))
const Create = lazy (() => import('./pages/Main/CreateTask'))


const App = () => {
    return (
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>     
                        <Route path = "/login" render={() => (
                            localStorage.jwtToken ? (
                                 <Redirect to="/profile"/>
                             ) : ( <Login />) )}/>   
                       
                         <Route path = "/profile" render={() => (
                            !localStorage.jwtToken ? (
                                <Redirect to="/login"/>
                            ) : (<Profile /> ) )}/>   
                         <Route exact path = "/main" render={() => (
                            !localStorage.jwtToken ? (
                            <Redirect to="/login"/>)
                             : (  <Main />) )}/>  
                         <Route exact path = "/main/create" render={() => (
                            !localStorage.jwtToken ? (
                            <Redirect to="/login"/>)
                             : (  <Create/>) )}/>   
                    </Switch>
                </Suspense>
            <Redirect exact from="/" to="login" />
            </Router>
    )
};

export default  App