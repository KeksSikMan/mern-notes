import { api } from "../../api";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
} from "./types";

import { clearErrors, returnErrors } from "../error/action";
import { AuthActionType } from "../../types/redux.types";
import { IConfigHeaders } from "../../types/interfaces";

/* Sign Up */
export const signUp = ({
  firstName,
  lastName,
  email,
  password,
}: AuthActionType) => (dispatch: Function) => {
  // Request body
  const body = JSON.stringify({ firstName, lastName, email, password });

  api
    .post("auth/signup", body)
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors("REGISTER_FAIL", err?.message));
      dispatch({ type: REGISTER_FAIL });
    });
};

/* Sign In */
export const signIn = ({ email, password }: AuthActionType) => (
  dispatch: Function
) => {
  // Request body
  const body = JSON.stringify({ email, password });

  api
    .post("auth/signin", body)
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors("LOGIN_FAIL", err?.message));
      dispatch({ type: LOGIN_FAIL });
    });
};

/* Logout User */
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

/* Setup config/headers and token */
export const tokenConfig = (getState: Function) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config: IConfigHeaders = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

/* Load User */
export const loadUser = () => (dispatch: Function, getState: Function) => {
  // User loading
  dispatch({ type: USER_LOADING });

  api
    .get("http://localhost:8080/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors("GET_USER_FAIL", err?.message));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
