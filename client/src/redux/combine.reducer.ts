import { CombinedState, combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { errorReducer } from "./error/reducer";
import { notesReducer } from "./notes/reducer";
import { categoryReducer } from "./category/reducer";
import { LOGOUT_SUCCESS } from "./auth/types";
import { IErrorReducer, IReduxAction } from "../interfaces/redux.types";

const appReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  notes: notesReducer,
  error: errorReducer,
});

const rootReducer = (
  state:
    | CombinedState<{
        auth: never;
        categories: never;
        notes: never;
        error: IErrorReducer;
      }>
    | undefined,
  action: IReduxAction
) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
