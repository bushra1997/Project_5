import { createStore, combineReducers } from "redux";
import token from "./login/index";

const reducers = combineReducers({ token });
const store = createStore(reducers);
export default store;
