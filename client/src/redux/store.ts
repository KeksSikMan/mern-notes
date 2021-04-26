import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./combine.reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
