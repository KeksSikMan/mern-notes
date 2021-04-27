import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// return error
export const returnErrors = (id: string, err: string) => {
  return {
    type: GET_ERRORS,
    payload: { id, err },
  };
};

// Clear error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
