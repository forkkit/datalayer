export const ANONYMOUS_USER = null;
export const ANONYMOUS_TOKEN = '';

export type User = {
  username: string ;
  firstName: string;
  lastName: string;
  email: string;
  roles: Array<string>;
};
