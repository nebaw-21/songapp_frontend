import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILURE } from "../actionTypes"


export const loginUser = (UserData) => (
  {
    type:LOGIN_REQUEST,
    payload:UserData
  }
)

export const loginUserSuccess = (UserData) => (
    {
      type:LOGIN_SUCCESS,
      payload:UserData,
    }
  )

export const loginUserFailure = (payload) => (
    {
      type:LOGIN_FAILURE,
      payload
    }
  )

  