import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

// import ping, { pingEpic, pongEpic } from "./ping";
// export const rootEpic = combineEpics(pingEpic, pongEpic);
import user, { fetchUserListEpic } from "./user";
import post, { fetchPostListEpic } from "./post";

export const rootEpic = combineEpics(fetchUserListEpic, fetchPostListEpic);

export const rootReducer = combineReducers({ user, post });
