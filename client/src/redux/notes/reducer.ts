import { INotesReducer, IReduxAction } from "../../interfaces/redux.types";
import {
  ACTIVE_CATEGORY,
  NOTES_GET,
  NOTES_GET_FAIL,
  NOTES_GET_SUCCESS,
  NOTE_CREATE,
  NOTE_CREATE_FAIL,
  NOTE_CREATE_SUCCESS,
  NOTE_DELETE,
  NOTE_DELETE_FAIL,
  NOTE_DELETE_SUCCESS,
  NOTE_UPDATE,
  NOTE_UPDATE_FAIL,
  NOTE_UPDATE_SUCCESS,
} from "./types";

const initialState = {
  category: null,
  isLoaded: false,
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  data: null,
};

export const notesReducer = (
  state = initialState,
  { type, payload }: IReduxAction
): INotesReducer => {
  switch (type) {
    case ACTIVE_CATEGORY:
      return { ...state, category: payload };
    case NOTE_CREATE:
      return { ...state, ...payload };
    case NOTE_UPDATE:
      return { ...state, ...payload };
    case NOTE_DELETE:
      return { ...state, ...payload };
    case NOTES_GET:
      return { ...state, ...payload };
    case NOTES_GET_SUCCESS:
      return { ...state, ...payload };
    case NOTE_CREATE_SUCCESS:
    case NOTE_UPDATE_SUCCESS:
    case NOTE_DELETE_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        isUpdating: false,
        isCreating: false,
      };
    case NOTES_GET_FAIL:
      return {
        ...state,
        data: null,
        isLoading: false,
        isLoaded: false,
      };
    case NOTE_CREATE_FAIL:
    case NOTE_UPDATE_FAIL:
    case NOTE_DELETE_FAIL:
      return { ...state, isUpdating: false, isCreating: false };
    default:
      return state;
  }
};
