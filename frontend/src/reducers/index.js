import { createStore, combineReducers } from "redux";
import token from "./login/index";
import tokenOut from "./signout/signout";

const reducers = combineReducers({ token, tokenOut });
const store = createStore(reducers);
export default store;
