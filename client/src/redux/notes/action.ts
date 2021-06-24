import { api } from "../../api";
import { ICategory } from "../../interfaces/interfaces";
import { tokenConfig } from "../auth/action";
import { returnErrors } from "../error/action";
import {
  ACTIVE_CATEGORY,
  NOTES_GET,
  NOTES_GET_FAIL,
  NOTES_GET_SUCCESS,
  NOTE_CREATE,
  NOTE_CREATE_FAIL,
  NOTE_CREATE_SUCCESS,
} from "./types";

export const activeCategory =
  (_id: string, title: string) => (dispatch: Function) => {
    dispatch({ type: ACTIVE_CATEGORY, payload: { _id, title } });
  };

export const createNote =
  ({ title, description, favorite, color, id_category }: any) =>
  (dispatch: Function, getState: Function) => {
    dispatch({ type: NOTE_CREATE });

    const body = JSON.stringify({
      title,
      description,
      favorite,
      color,
      id_category,
    });

    api
      .post(`/notes/${id_category}/create`, body, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: NOTE_CREATE_SUCCESS });
      })
      .catch((err) => {
        //* log error
        dispatch({ type: NOTE_CREATE_FAIL });
      });
  };

export const getAllNotes =
  (id_category: string) => (dispatch: Function, getState: Function) => {
    dispatch({ type: NOTES_GET });
    api
      .get(`/notes/${id_category}`, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: NOTES_GET_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: NOTES_GET_FAIL });
      });
  };
