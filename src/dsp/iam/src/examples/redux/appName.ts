export type IAppNameState = {
  appName: string
}

const initialState: IAppNameState = {
  appName: 'remoteApp',
};

const CHANGE_APP_NAME = 'CHANGE_APP_NAME';

const changeAppNameAction = (appName) => {
  return { type: CHANGE_APP_NAME, payload: appName };
};

const appNameReducer = (state: IAppNameState = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
  }
  return state;
};

export { changeAppNameAction };
export default appNameReducer;
