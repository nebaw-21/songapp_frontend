import { REGISTER_SUCCESS,REGISTER_REQUEST, REGISTER_FAILURE } from "../actionTypes"


export const postUser = (UserData) => (
  {
    type:REGISTER_REQUEST,
    payload:UserData
  }
)

export const postUserSuccess = (UserData) => (
    {
      type:REGISTER_SUCCESS,
      payload:UserData,
    }
  )

export const postUserFailure = (payload) => (
    {
      type:REGISTER_FAILURE,
      payload
    }
  )

  