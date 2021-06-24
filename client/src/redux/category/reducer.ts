import { IReduxAction, ICategoryReducer } from "../../interfaces/redux.types";
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

const initialState = {
  isLoaded: false,
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  data: null,
};

export const categoryReducer = (
  state = initialState,
  { type, payload }: IReduxAction
): ICategoryReducer => {
  switch (type) {
    case CATEGORY_CREATE:
      return { ...state, isCreating: true };
    case CATEGORY_UPDATE:
      return { ...state, isUpdating: true };
    case CATEGORY_DELETE:
      return { ...state };
    case CATEGORIES_GET:
      return { ...state, isLoading: true };
    case CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isLoaded: true,
      };
    case CATEGORY_CREATE_SUCCESS:
    case CATEGORY_UPDATE_SUCCESS:
    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        isUpdating: false,
        isCreating: false,
      };
    case CATEGORIES_GET_FAIL:
      return {
        ...state,
        data: null,
        isLoading: false,
        isLoaded: false,
      };
    case CATEGORY_CREATE_FAIL:
    case CATEGORY_UPDATE_FAIL:
    case CATEGORY_DELETE_FAIL:
      return { ...state, isUpdating: false, isCreating: false };

    default:
      return state;
  }
};
