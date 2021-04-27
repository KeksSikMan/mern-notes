import { Nullable } from "../../types";
import { ReduxActionType } from "../../types/redux.types";
import {
  SECTION_CREATE,
  SECTION_DELETE,
  SECTIONS_GET,
  SECTION_UPDATE,
  SECTIONS_GET_SUCCESS,
  SECTION_CREATE_SUCCESS,
  SECTION_UPDATE_SUCCESS,
  SECTION_CREATE_FAIL,
  SECTION_UPDATE_FAIL,
  SECTIONS_GET_FAIL,
} from "./types";

export type ISection = {
  title: string;
  color: string;
  description: string;
  favorite: boolean;
  owner: Object;
};

export type SectionReducerType = {
  isLoaded: boolean;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  data: Nullable<[ISection]>;
};

const initialState = {
  isLoading: false,
  isLoaded: false,
  isCreating: false,
  isUpdating: false,
  data: null,
};

export const sectionReducer = (
  state = initialState,
  { type, payload }: ReduxActionType
): SectionReducerType => {
  switch (type) {
    case SECTION_CREATE:
      return { ...state, isCreating: true };
    case SECTION_UPDATE:
      return { ...state, isUpdating: true };
    case SECTION_DELETE:
      return { ...state };
    case SECTIONS_GET:
      return { ...state, isLoading: true };
    case SECTIONS_GET_SUCCESS:
      return { ...state, data: payload, isLoading: false, isLoaded: true };
    case SECTION_CREATE_SUCCESS:
    case SECTION_UPDATE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isCreating: false,
      };
    case SECTIONS_GET_FAIL:
    case SECTION_CREATE_FAIL:
    case SECTION_UPDATE_FAIL:
      return {
        ...state,
        data: null,
        isLoaded: false,
        isUpdating: false,
        isCreating: false,
      };
    default:
      return state;
  }
};
