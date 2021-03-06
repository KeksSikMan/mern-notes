import { E_ERROR } from "./enum";

// ERRORS
export interface IMsg {
  msg: string | any;
}

/** AUTH */
export interface ILogoutProps {
  logout(): void;
}

export interface IError {
  id: E_ERROR;
  msg: IMsg;
}

export interface IAuthReduxProps {
  auth: { isAuthenticated: boolean };
  error: IError;
}

export interface IConfigHeaders {
  headers: {
    [index: string]: string;
  };
}

/** Sections */
export interface ICategory {
  _id: string;
  title: string;
  color: string;
  description: string;
  favorite: boolean;
  owner: Object;
}

/** Notes */
export interface INote {
  _id: string;
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  element?: IElement;
  category?: Object;
  createdAt?: string;
}
export interface IElement {
  text: String;
  isList: Boolean;
  isTask: Boolean;
  indet: Number;
  alignment: Align;
}

export enum Align {
  left = 1,
  center,
  right,
}
