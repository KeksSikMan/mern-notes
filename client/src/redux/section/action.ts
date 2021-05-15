import { api } from "../../api";
import { tokenConfig } from "../auth/action";
import { clearErrors, returnErrors } from "../error/action";
import {
  SECTIONS_GET,
  SECTIONS_GET_FAIL,
  SECTIONS_GET_SUCCESS,
  SECTION_CREATE,
  SECTION_CREATE_FAIL,
  SECTION_CREATE_SUCCESS,
  SECTION_UPDATE,
  SECTION_UPDATE_FAIL,
  SECTION_UPDATE_SUCCESS,
} from "./types";

export interface IActionSection {
  _id: string;
  title: string;
  description?: string;
  favorite?: boolean;
  color?: string;
  owner?: Object;
}

/** Create section */
export const createSection =
  ({ title, description, favorite, color, owner }: IActionSection) =>
  (dispatch: Function) => {
    dispatch({
      type: SECTION_CREATE,
    });
    const body = JSON.stringify({ title, description, favorite, color, owner });

    api
      .post("section/create", body)
      .then((res) => {
        dispatch(clearErrors());
        dispatch({
          type: SECTION_CREATE_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_CREATE_FAIL", err?.message));
        dispatch({ type: SECTION_CREATE_FAIL });
      });
  };

/** Get all sections */
export const getSections = () => (dispatch: Function, getState: Function) => {
  dispatch({ type: SECTIONS_GET });
  api
    .get("/section", tokenConfig(getState))
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: SECTIONS_GET_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors("SECTION_GET_FAIL", err?.message));
      dispatch({ type: SECTIONS_GET_FAIL });
    });
};

/** Get one section */
export const getSection = () => (dispatch: Function, getState: Function) => {
  // get
};

/** Update section */
export const updateSection =
  ({ _id, title, description, favorite, color }: IActionSection) =>
  (dispatch: Function, getState: Function) => {
    dispatch({ type: SECTION_UPDATE });
    const body = JSON.stringify({ title, description, favorite, color });

    api
      .patch("/", body, { params: { _id } })
      .then((res) => {
        dispatch(clearErrors());
        dispatch({ type: SECTION_UPDATE_SUCCESS });
      })
      .catch((err) => {
        dispatch(returnErrors("SECTION_UPDATE_FAIL", err?.message));
        dispatch({ type: SECTION_UPDATE_FAIL });
      });
  };

/** Delete section */
export const deleteSection = () => () => {};
