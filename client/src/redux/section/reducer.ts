import { CREATE_SECTION, GET_SECTION } from "./types";

const initialState = {};

export const sectionReducer: any = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case CREATE_SECTION:
      return { ...state, ...payload };

    default:
      return state;
  }
};
