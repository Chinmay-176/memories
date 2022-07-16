import { combineReducers } from "redux";
import posts from "./posts.js";
import authreducers from "./auth.js";

export default combineReducers({posts,authreducers});