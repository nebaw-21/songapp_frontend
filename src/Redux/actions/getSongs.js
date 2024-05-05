import { GET_SONGS_START,GET_SONGS_FAILURE, GET_SONGS_SUCCESS } from "../actionTypes"


export const getSongs = () => (
  {
    type:GET_SONGS_START,
  }
)

export const getSongsSuccess = (payload) => (
    {
      type:GET_SONGS_SUCCESS,
      payload,
    }
  )

export const getSongsFailure = (payload) => (
    {
      type:GET_SONGS_FAILURE,
      payload
    }
  )

  