import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AnyAction } from 'typescript-fsa';
import appNameReducer, { IAppNameState } from './appName';
import { counterReducer, ICounterState, counterEpic } from './counter1';

export type IAppState = {
  appName: IAppNameState,
  counter: ICounterState
};

const reducers = combineReducers<IAppState>({
  appName: appNameReducer,
  counter: counterReducer
});

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, ICounterState, any>();

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(counterEpic);

export { reducers };

export default store;
