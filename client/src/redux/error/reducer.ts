import { GET_ERRORS, CLEAR_ERRORS } from "./types";
import { ErrorReducerTypes, ReduxActionType } from "../../types/redux.types";

const initialState = {
  id: null,
  data: null,
  status: null,
  statusText: null,
};

export const errorReducer = (
  state = initialState,
  action: ReduxActionType
): ErrorReducerTypes => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        id: action.payload.id,
        data: action.payload.data,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    case CLEAR_ERRORS:
      return {
        id: null,
        data: null,
        status: null,
        statusText: null,
      };
    default:
      return state;
  }
};
