import { useState } from "react";
import { User, ANONYMOUS_USER, ANONYMOUS_TOKEN} from "../model/Model";
import { setStoredUser, setStoredToken } from "./AuthModel";

export type ApiRequest = {
  url: string;
  method: string;
  body?: {}
};

const useAuthHook = (initialUser: User | null, initialToken: string, history?: any | null) => {
  const [state, setState] = useState({user: initialUser, token: initialToken });
  const setAuthStatus = (user: User, token: string) => {
    setStoredUser(user);
    setStoredToken(token);
    setState({user: user, token: token});
  };
  const setUnauthStatus = () => {
    setStoredUser(ANONYMOUS_USER);
    setStoredToken(ANONYMOUS_TOKEN);
    setState({user: ANONYMOUS_USER, token: ANONYMOUS_TOKEN });
  };
  /**
   * API Request handler
   * 
   * @param url - api endpoint
   * @param method - http method
   * @param body - body parameters of request
   */
  const apiRequest =  (req: ApiRequest): Promise<any> => {
    return fetch(req.url, {
      method: req.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`
      },
      body: req.body ? JSON.stringify(req.body) : undefined
    })
    .then(resp => {
      if(resp.status != 200) {
        if (resp.status === 401) {
          setUnauthStatus();
          if (history) {
            console.log('Received 401 - Driving to Login Page')
            history.push('/api/iam/login');
          }
        }
        else {
          throw new Error(resp.status.toString());
        }
      }
      return resp.json()
    })
    .catch(function(error) {
      throw error;
    });  
  };
  return {
    user: state.user,
    token: state.token,
    setAuthStatus: setAuthStatus,
    setUnauthStatus: setUnauthStatus,
    apiRequest: apiRequest,
    history: history
  };
};

export default useAuthHook;
