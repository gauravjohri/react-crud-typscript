import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";

export const AllReducer = combineReducers({
    login: LoginReducer
})