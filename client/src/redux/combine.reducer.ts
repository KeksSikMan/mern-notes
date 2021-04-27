import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { errorReducer } from "./error/reducer";
import { notesReducer } from "./notes/reducer";
import { sectionReducer } from "./section/reducer";

const reducer = combineReducers({
  auth: authReducer,
  sections: sectionReducer,
  notes: notesReducer,
  error: errorReducer,
});

export default reducer;
