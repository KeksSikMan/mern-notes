import { api } from "../../api";
import { tokenConfig } from "../auth/action";
import { clearErrors, returnErrors } from "../error/action";
import {
  SECTIONS_GET,
  SECTIONS_GET_FAIL,
  SECTIONS_GET_SUCCESS,
  SECTION_CREATE,
} from "./types";

export interface IActionSection {
  title: string;
  description?: string;
  favorite?: boolean;
  color?: string;
  owner?: Object;
}

/** Create section */
export const createSection = ({
  title,
  description,
  favorite,
  color,
  owner,
}: IActionSection) => (dispatch: Function) => {
  const body = JSON.stringify({ title, description, favorite, color, owner });

  api
    .post("section/create", body)
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: SECTION_CREATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors("SECTION_CREATE_FAIL", err?.message));
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
export const getSection = () => () => {};

/** Update section */
export const updateSection = () => () => {};

/** Delete section */
export const deleteSection = () => () => {};
