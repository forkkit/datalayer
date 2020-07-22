/*
 * Actions */

import actionCreatorFactory from 'typescript-fsa'

export enum ActionType {
  INCREMENT_COUNTER2 = 'counter/INCREMENT_COUNTER2',
  DECREMENT_COUNTER2 = 'counter/DECREMENT_COUNTER2'
}

const actionCreator = actionCreatorFactory()

export const counterActions2 = {
  increment: actionCreator.async<undefined, undefined>(ActionType.INCREMENT_COUNTER2),
  decrement: actionCreator.async<undefined, undefined>(ActionType.DECREMENT_COUNTER2),
}

/*
 * State */

export type ICounter = number;

export interface ICounterState {
  counter : ICounter;
};

export const counterInitialState: ICounterState = {
  counter: 0
}

/*
 * Reducer */

import { reducerWithInitialState } from 'typescript-fsa-reducers'

export const counterReducer2 = reducerWithInitialState(counterInitialState)
//  .case(actions.increment.done, state => ({ counter: state.counter + 1} ))
//  .case(actions.decrement.done, state => ({ counter: state.counter - 1} ))
.case(counterActions2.decrement.done, (state: ICounterState) => ({
      ...state,
      counter: state.counter - 1
    })
  )
  .case(counterActions2.increment.done, (state: ICounterState) => ({
      ...state,
      counter: state.counter + 1
    })
  )

/*
 * Epics */

import { delay, map, tap, ignoreElements } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';
import { AnyAction, Action, Success } from 'typescript-fsa';
import { ofAction } from 'typescript-fsa-redux-observable';

const counterIncrementEpic: Epic<AnyAction, Action<Success<undefined, undefined>>, ICounterState> =
  action$ =>
      action$.pipe(
        ofAction(counterActions2.increment.started),
        delay(2000),
        map(action => counterActions2.increment.done({
            params: action.payload,
            result: undefined
        }))
      );

const counterDecrementEpic: Epic<AnyAction, Action<Success<undefined, undefined>>, ICounterState> =
  action$ =>
      action$.pipe(
        ofAction(counterActions2.decrement.started),
        delay(100),
        map(action => counterActions2.decrement.done({
            params: action.payload,
            result: undefined
        }))
      );

const loggingEpic: Epic<AnyAction, AnyAction, ICounterState> =
  action$ =>
    action$.pipe(
      ofAction(
        counterActions2.decrement.started,
        counterActions2.increment.started,
      ),
      tap(action => console.log(action.type)),
      ignoreElements()
    )
    .pipe(
      ofAction(
        counterActions2.increment.started,
      ),
      tap(action => console.log(action.type)),
      ignoreElements()
  );

export const counterEpic2 = combineEpics(
    counterIncrementEpic,
    counterDecrementEpic,
    loggingEpic,
);

/*
 * Selectors */

import { useSelector } from 'react-redux';
import { IAppState } from './store';

export const useCounter2 = () => useSelector((state: IAppState) => state.counter.counter);
