import { combineReducers } from "redux";
import conf from "./reducers/conf";
import lists from "./reducers/lists";

export default combineReducers({ conf, lists });
