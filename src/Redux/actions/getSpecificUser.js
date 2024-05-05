import { GET_SPECIFIC_USER_START, GET_SPECIFIC_USER_SUCCESS, GET_SPECIFIC_USER_FAILURE } from "../actionTypes";

export const getSpecificUser = (token) => ({
  type: GET_SPECIFIC_USER_START,
  payload: token 
});

export const getSpecificUserSuccess = (payload) => ({
  type: GET_SPECIFIC_USER_SUCCESS,
  payload,
});

export const getSpecificUserFailure = (payload) => ({
  type: GET_SPECIFIC_USER_FAILURE,
  payload,
});
