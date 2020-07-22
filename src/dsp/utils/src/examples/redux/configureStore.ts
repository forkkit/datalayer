import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";

export interface IAction {
  payload: {
    userId: string
  }
}

export interface IPost {
  id: string
}

export interface IState {
  user: {
    selectedUserId: string
  },
  post: {
    selectedUserId: string
    isLoading: boolean,
    posts: Array<IPost>
  }
}

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
