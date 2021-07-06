import { createStore, combineReducers } from "redux";
import token from "./login/index";
import profilePictuer from "./Profile/index";

const reducers = combineReducers({ token, profilePictuer });
const store = createStore(reducers);
export default store;
