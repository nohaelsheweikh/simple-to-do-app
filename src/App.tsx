import React, {lazy, Suspense} from 'react';
import { Router, Route, Switch,Redirect,} from "react-router-dom";
import history from "./utils/history"



const Login = lazy (() => import('./pages/Login/LoginPage'))
const Profile = lazy (() => import('./pages/Profile/Profile'))
const Main = lazy (() => import('./pages/Main/TasksPage'))
const Create = lazy (() => import('./pages/Main/CreateTask'))
const Update = lazy (() => import('./pages/Main/UpdateTask'))



const App = () => {
    return (
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>     
                        <Route exact path = "/login" render={() => (
                            localStorage.jwtToken ? (
                                 <Redirect to="/profile"/>
                             ) : ( <Login />) )}/>   
                       
                         <Route exact path = "/profile" render={() => (
                            !localStorage.jwtToken ? (
                                <Redirect to="/login"/>
                            ) : (<Profile /> ) )}/>   
                         <Route exact path = "/" render={() => (
                            !localStorage.jwtToken ? (
                            <Redirect to="/login"/>)
                             : (  <Main />) )}/>  
                         <Route exact path = "/create" render={() => (
                            !localStorage.jwtToken ? (
                            <Redirect to="/login"/>)
                             : (  <Create/>) )}/>   
                        <Route path = "/task/:id"render={(props) => <Update {...props} />} />

                    </Switch>
                </Suspense>
                <Redirect exact from="/" to="login" />
            </Router>
    )
};

export default  App