import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';

const initialState = {
  appName: 'host',
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const staticReducers = {
  host: hostReducer,
};

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function configureStore() {

  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, any, any>();

  const store = createStore(
    createReducer({}), 
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  (store as any).asyncReducers = {};

  (store as any).injectReducer = (key, asyncReducer) => {
    (store as any).asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer((store as any).asyncReducers));
  };

  (store as any).injectEpic = (epic) => {
    epicMiddleware.run(epic);
  }

  return store;

}

export const store = configureStore();
