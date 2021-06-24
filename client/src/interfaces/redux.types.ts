// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< REDUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

import { Nullable } from ".";
import { ICategory } from "./interfaces";

//* auth reducer
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IAuthReducer {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: Nullable<IUser>;
}

//* Category reducer
export interface CategoryReducerType {
  isLoaded: boolean;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  data: Nullable<[ICategory]>;
}
//*Notes reducer

export interface INotesReducer {
  category: Nullable<ICategory>;
  isLoaded: boolean;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  data: Nullable<[ICategory]>;
}

//* error reducer
export interface IErrorReducer {
  id: null | any;
  err: null | any;
}

//* redux action
export interface IReduxAction {
  type: string;
  payload?: any;
}

export interface IAuthAction {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}
