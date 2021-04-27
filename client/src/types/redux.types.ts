// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< REDUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

import { Nullable } from ".";

// auth reducer
export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthReducerType = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: Nullable<UserType>;
};

// error reducer
export type ErrorReducerTypes = {
  id: null | any;
  err: null | any;
};

// redux action
export type ReduxActionType = {
  type: string;
  payload?: any;
};

export type AuthActionType = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};
