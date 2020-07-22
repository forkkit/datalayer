import { User, ANONYMOUS_USER, ANONYMOUS_TOKEN } from "../model/Model";
import jwt_decode from "jwt-decode";

const USER_KEY = 'user';
const TOKEN_KEY = 'token';

/** 
 * Return user auth from local storage value.
 */
export const getStoredUser = (): User | null => {
  const auth = window.localStorage.getItem(USER_KEY);
  if (auth) {
    return JSON.parse(auth);
  }
  return ANONYMOUS_USER;
};

export const setStoredUser = (user: User | null) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/** 
 * Return token from local storage value.
 */
export const getStoredToken = (): string => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    return token;
  }
  return '';
};

export const setStoredToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
  if (token != ANONYMOUS_TOKEN) {
    const decoded_token = jwt_decode<any>(token);
    console.log('Received Token', decoded_token)
  }
};
