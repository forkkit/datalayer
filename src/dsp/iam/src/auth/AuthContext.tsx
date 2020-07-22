import React, { createContext } from "react";
import { User, ANONYMOUS_USER, ANONYMOUS_TOKEN } from "../model/Model";
import useAuthHook, { ApiRequest } from "./AuthHook";
import { getStoredUser, getStoredToken } from "./AuthModel";

interface IAuthContext {
  user: User | null;
  token: string;
  setAuthStatus: (user: User, token: string) => void;
  setUnauthStatus: () => void;
  apiRequest: (req: ApiRequest) => Promise<any>;
  history?: any | null;
}

export const authContext = createContext<IAuthContext>({
  user: ANONYMOUS_USER,
  token: ANONYMOUS_TOKEN,
  setAuthStatus: (user: User, token: string) => {},
  setUnauthStatus: () => {},
  apiRequest: (req: ApiRequest) => Promise.resolve({}),
  history: {}
});

const { Provider } = authContext;

// const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const AuthProviderProvider = (props) => {
  const { user, token, setAuthStatus, setUnauthStatus, apiRequest, history } = useAuthHook(getStoredUser(), getStoredToken(), props.history);
  return (
    <Provider value={{ user, token, setAuthStatus, setUnauthStatus, apiRequest, history }}>
      {props.children}
    </Provider>
  );
};

export default AuthProviderProvider;
