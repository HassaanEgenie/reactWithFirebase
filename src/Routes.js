import React from "react";
import {Route,Switch } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signup";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";

const Routes=()=>{
    let user_authentication=localStorage.getItem("isAuthenticated");
    console.log("user_authentication",user_authentication);
    return(
        <>
            <Switch>
                <Route  exact  path="/sign-in" component={SignIn} /> 
                <Route exact  path="/" component={SignUp} /> 
                <ProtectedRoutes exact path="/home" component={Home} />
            </Switch>
        </>
    )
}
export default Routes;