
import {combineReducers} from "redux";
import {SignIn} from "./UserInfo";
import {Register} from "./UserInfo";
import {UserInfo} from "./UserInfo";

export const all_reducers=combineReducers({
    UserSignIn:SignIn,
    userRegisterd:Register,
    UserInfo:UserInfo,
})