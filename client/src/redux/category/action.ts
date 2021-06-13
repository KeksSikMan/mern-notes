import { api } from "../../api";
import { tokenConfig } from "../auth/action";
import { returnErrors } from "../error/action";
import {
  CATEGORIES_GET,
  CATEGORIES_GET_FAIL,
  CATEGORIES_GET_SUCCESS,
  CATEGORY_CREATE,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_UPDATE,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_SUCCESS,
} from "./types";

export interface IActionCategory {
  _id?: string;
  title?: string;
  description?: string;
  favorite?: boolean;
  color?: string;
  owner?: Object;
}

export const createCategory =
  ({ title, description, favorite, color, owner }: IActionCategory) =>
  (dispatch: Function, getState: Function) => {
    dispatch({
      type: CATEGORY_CREATE,
    });
    const body = JSON.stringify({ title, description, favorite, color, owner });

    api
      .post("category/create", body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CATEGORY_CREATE_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_CREATE_FAIL", err?.message));
        dispatch({ type: CATEGORY_CREATE_FAIL });
      });
  };

export const getAllCategories =
  () => (dispatch: Function, getState: Function) => {
    dispatch({ type: CATEGORIES_GET });
    api
      .get("/category", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CATEGORIES_GET_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_GET_FAIL", err?.message));
        dispatch({ type: CATEGORIES_GET_FAIL });
      });
  };

export const getCategory = () => (dispatch: Function, getState: Function) => {
  //TODO get
};

export const updateCategory =
  ({ _id, title, description, favorite, color }: IActionCategory) =>
  (dispatch: Function, getState: Function) => {
    dispatch({ type: CATEGORY_UPDATE });
    const body = JSON.stringify({ title, description, favorite, color });

    api
      .patch(`/category/${_id}`, body, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: CATEGORY_UPDATE_SUCCESS });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_UPDATE_FAIL", err?.message));
        dispatch({ type: CATEGORY_UPDATE_FAIL });
      });
  };

export const deleteCategory =
  ({ _id }: IActionCategory) =>
  (dispatch: Function, getState: Function) => {
    dispatch({ type: CATEGORY_DELETE });
    api
      .delete(`/category/${_id}`, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: CATEGORY_DELETE_SUCCESS });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_DELETE_FAIL", err?.message));
        dispatch({ type: CATEGORY_DELETE_FAIL });
      });
  };
