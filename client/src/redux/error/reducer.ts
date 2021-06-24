import { GET_ERRORS, CLEAR_ERRORS } from "./types";
import { IErrorReducer, IReduxAction } from "../../interfaces/redux.types";

const initialState = {
  id: null,
  err: null,
};

export const errorReducer = (
  state = initialState,
  action: IReduxAction
): IErrorReducer => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        id: action.payload.id,
        err: action.payload.err,
      };
    case CLEAR_ERRORS:
      return {
        id: null,
        err: null,
      };
    default:
      return state;
  }
};
