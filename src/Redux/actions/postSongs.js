import { POST_SONGS_START,POST_SONGS_FAILURE, POST_SONGS_SUCCESS } from "../actionTypes"


export const postSongs = (songData) => (
  {
    type:POST_SONGS_START,
    payload:songData
  }
)

export const postSongsSuccess = (songData) => (
    {
      type:POST_SONGS_SUCCESS,
      payload:songData,
    }
  )

export const postSongsFailure = (payload) => (
    {
      type:POST_SONGS_FAILURE,
      payload
    }
  )

  