import { CREATE_NOTES, GET_NOTES } from "./types";

enum Align {
  left = 1,
  center,
  right,
}

interface IElement {
  text: String;
  isList: Boolean;
  isTask: Boolean;
  indet: Number;
  alignment: Align;
}

interface INote {
  title: string;
  color?: string;
  description?: string;
  favorite?: boolean;
  element?: IElement;
  section: Object;
}

const initialState = {};

export const notesReducer: any = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case CREATE_NOTES:
      return { ...state, ...payload };

    default:
      return state;
  }
};
