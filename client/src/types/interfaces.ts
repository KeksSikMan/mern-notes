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
export interface ISection {
  _id: string;
  title: string;
  color: string;
  description: string;
  favorite: boolean;
  owner: Object;
}

/** Notes */