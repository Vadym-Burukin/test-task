import { GET_SHOW_START, GET_SHOW_INIT, GET_SHOW_SUCCESS, GET_SHOW_FAIL } from '../actionTypes';

export const getShowInit = () => ({
  type: GET_SHOW_INIT,
});

export const getShowStart = () => ({
  type: GET_SHOW_START,
});

export const getShowSuccess = (payload) => ({
  type: GET_SHOW_SUCCESS,
  payload,
});

export const getShowFail = (error) => ({
  type: GET_SHOW_FAIL,
  error,
});
