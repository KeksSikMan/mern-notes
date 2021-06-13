import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { errorReducer } from "./error/reducer";
import { notesReducer } from "./notes/reducer";
import { categoryReducer } from "./category/reducer";

const reducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  notes: notesReducer,
  error: errorReducer,
});

export default reducer;
