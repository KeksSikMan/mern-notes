import { ICategory } from "../../interfaces/interfaces";
import { ACTIVE_CATEGORY, NOTE_CREATE } from "./types";

export const activeCategory =
  (_id: string, title: string) => (dispatch: Function) => {
    dispatch({ type: ACTIVE_CATEGORY, payload: { _id, title } });
  };
