import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import appNameReducer, { changeAppNameAction } from './appName';
import { counterReducer, counterActions, counterEpic } from './counter1';
import { counterReducer2, counterActions2, counterEpic2 } from './counter2';

const remoteAppScope = 'remoteApp';
const counterScope = 'counter';
const counterScope2 = 'counter2';

const IamReduxExample = () => {

  const dispatch = useDispatch();

  const remoteAppState = useSelector((state) => state[remoteAppScope]);
  const [remoteAppInput, setRemoteAppInput] = useState('');

  const counterState = useSelector((state) => state[counterScope]);
  const counterState2 = useSelector((state) => state[counterScope2]);

  return (
    <div style={{ marginTop: '10px' }}>
      <h2>Counter value: {counterState && counterState.counter}</h2>
      <button onClick={() => dispatch(counterActions.increment.started(undefined))}>Increment Counter (1 second delay)</button>
      <button onClick={() => dispatch(counterActions.decrement.started(undefined))}>Decrement Counter (0.2 second delay)</button>
      <h2>Counter2 value: {counterState && counterState2.counter}</h2>
      <button onClick={() => dispatch(counterActions2.increment.started(undefined))}>Increment Counter (1 second delay)</button>
      <button onClick={() => dispatch(counterActions2.decrement.started(undefined))}>Decrement Counter (0.2 second delay)</button>
      <div>Remote App</div>
      <div>
        Remote App's name from the redux store : {remoteAppState && remoteAppState.appName}
      </div>
      <div>
        <input
          style={{ marginRight: '10px' }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
          Dispatch RemoteApp new name
        </button>
      </div>
    </div>
  );
};

const IamReduxExampleRemote = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(remoteAppScope, appNameReducer);
    store.injectReducer(counterScope, counterReducer);
    store.injectEpic(counterEpic);
    store.injectReducer(counterScope2, counterReducer2);
    store.injectEpic(counterEpic2);
  }, []);
  return (
    <Provider store={store || {}}>
      <IamReduxExample />
    </Provider>
  );
};

export default IamReduxExampleRemote;
