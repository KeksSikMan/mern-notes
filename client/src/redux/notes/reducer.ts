import { CREATE_NOTES, GET_NOTES } from "./types";

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
