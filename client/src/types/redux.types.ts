// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< REDUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

import { Nullable } from ".";
import { ICategory } from "./interfaces";

// auth reducer
export type UserType = {
  _id: string;
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

/** Section reducer */
export type CategoryReducerType = {
  isLoaded: boolean;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  data: Nullable<[ICategory]>;
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
