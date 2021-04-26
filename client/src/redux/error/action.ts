import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// return error
export const returnErrors = (id: string, data: any, status: number, statusText: string) => {
  return {
    type: GET_ERRORS,
    payload: {id, data, status, statusText },
  };
};

// Clear error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
